function accelerateOne(img) {
  if (!img || img.dataset.cdnDone) return;
  const orig = img.getAttribute('src');
  if (!orig) return;

  // 忽略已经是 CDN 的、或者显式跳过的
  if (img.dataset.cdn === 'skip') return;

  const cdnUrl = toCDN(orig);
  if (cdnUrl === orig) {
    // 不是 images 路径或无需替换；但也给个一次性的本地→占位兜底
    attachLocalToPlaceholderFallback(img);
    return;
  }

  // 先保存原地址
  img.dataset.origSrc = orig;

  // ① CDN失败 -> 回源
  function onCdnErr() {
    img.removeEventListener('error', onCdnErr);
    img.addEventListener('error', onLocalErr, { once: true }); // 进入②
    img.src = img.dataset.origSrc;
  }

  // ② 本地也失败 -> 占位图
  function onLocalErr() {
    img.removeEventListener('error', onLocalErr);
    const ph = img.dataset.placeholder || '../images/placeholder.jpg';
    img.src = ph;
  }

  img.addEventListener('error', onCdnErr, { once: true });
  img.src = cdnUrl;          // 先走 CDN
  img.dataset.cdnDone = '1';
}

// 若某些图没被替换到 CDN（toCDN 返回原值），也给它一个本地→占位兜底
function attachLocalToPlaceholderFallback(img) {
  if (img.dataset.localFallbackBound) return;
  img.dataset.localFallbackBound = '1';
  img.addEventListener('error', function onLocalErrOnce() {
    img.removeEventListener('error', onLocalErrOnce);
    const ph = img.dataset.placeholder || '../images/placeholder.jpg';
    img.src = ph;
  }, { once: true });
}
