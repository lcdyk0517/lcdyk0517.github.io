// js/cdn-accelerate.js
// 作用：把页面上指向 images/ 的图片自动替换到 CDN，失败回退原地址。
// 使用：在页面 head 里设置 window.ASSET_CDN_BASE，然后引入本脚本即可。

(function () {
  const CDN = (window.ASSET_CDN_BASE || '').replace(/\/+$/, ''); // 去尾斜杠
  if (!CDN) return; // 未配置就不做事

  // 允许的本地前缀（根据你项目而定）
  const LOCAL_PREFIXES = [
    '../images/', './images/', '/images/', 'images/'
  ];

  // 将本地 images 路径换到 CDN
  function toCDN(url) {
    try {
      // 已是绝对地址，且不是本站 images：不处理
      if (/^https?:\/\//i.test(url) && !/\/images\//i.test(url)) return url;

      // 统一处理成不带前缀的 images 子路径
      for (const p of LOCAL_PREFIXES) {
        if (url.startsWith(p)) {
          const sub = url.slice(p.length); // 去掉前缀
          return `${CDN}/${sub.replace(/^\/+/, '')}`;
        }
      }
      // 形如：/images/xxx 或 images/xxx
      if (/^\/?images\//i.test(url)) {
        const sub = url.replace(/^\/?images\//i, '');
        return `${CDN}/${sub}`;
      }
      return url;
    } catch {
      return url;
    }
  }

  // 为单个 <img> 元素替换并添加回退
  function accelerateOne(img) {
    if (!img || img.dataset.cdnDone) return;
    const orig = img.getAttribute('src');
    if (!orig) return;

    // 忽略占位图或已是 CDN 地址
    if (img.dataset.cdn === 'skip') return;
    if (orig.startsWith(CDN)) return;

    const cdnUrl = toCDN(orig);
    if (cdnUrl === orig) return;

    // 先保存原地址，设置回退
    img.dataset.origSrc = orig;
    img.addEventListener('error', function onErr() {
      // 仅当当前 src 是 cdnUrl 时回退
      if (img.src && img.src.indexOf(cdnUrl) !== -1) {
        img.removeEventListener('error', onErr);
        img.src = img.dataset.origSrc;
      }
    });

    // 替换到 CDN
    img.src = cdnUrl;
    img.dataset.cdnDone = '1';
  }

  // 扫描现有图片
  function accelerateAll() {
    document.querySelectorAll('img[src]').forEach(accelerateOne);
  }

  // 观察后续新增的图片（包括详情弹窗内动态渲染）
  const mo = new MutationObserver(muts => {
    for (const m of muts) {
      if (m.type === 'childList') {
        m.addedNodes && m.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.tagName === 'IMG') accelerateOne(node);
            node.querySelectorAll && node.querySelectorAll('img[src]').forEach(accelerateOne);
          }
        });
      } else if (m.type === 'attributes' && m.target.tagName === 'IMG' && m.attributeName === 'src') {
        accelerateOne(m.target);
      }
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      accelerateAll();
      mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
    });
  } else {
    accelerateAll();
    mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
  }
})();
