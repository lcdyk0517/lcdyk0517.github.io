// 主要功能脚本
document.addEventListener('DOMContentLoaded', function () {
    // 设置导航激活状态
    setActiveNav();

    // 其他通用功能可以在这里添加
});

// 设置导航激活状态
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage.includes(linkHref.replace('.html', '')))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 通用工具函数
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--glass);
        color: var(--light);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(10px);
        z-index: 10000;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 3秒后自动消失
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 页面加载进度指示器
window.addEventListener('load', function () {
    // 隐藏加载指示器（如果有的话）
    const loader = document.getElementById('loading');
    if (loader) {
        loader.style.display = 'none';
    }

    // 添加加载完成类
    document.body.classList.add('page-loaded');
});

// 添加CSS加载状态样式
const loadStyle = document.createElement('style');
loadStyle.textContent = `
    .page-loaded * {
        animation-duration: 0.5s !important;
    }
`;
document.head.appendChild(loadStyle);