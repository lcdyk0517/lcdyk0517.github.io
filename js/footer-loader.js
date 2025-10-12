// js/footer-loader.js
function loadFooter() {
    const footerHTML = `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3><i class="fas fa-info-circle"></i> 关于本站</h3>
                <p>类R36S中文百科是一个专注于类R36S掌机设备的开源知识库，提供设备识别、使用指南、固件下载等服务。</p>
                <p>我们的目标是建立一个全面、准确、及时的设备信息数据库。</p>
            </div>
            
            <div class="footer-section">
                <h3><i class="fas fa-chart-bar"></i> 实时统计</h3>
                <div class="stats-container">
                    <div class="stat-item">
                        <i class="fas fa-clock"></i>
                        <span id="site-uptime">运行时间: 计算中...</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-calendar"></i>
                        <span id="site-launch-date">建站时间: 2025-10-11</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 类R36S中文百科. 保留所有权利. | 
                <span id="current-time">正在加载时间...</span>
            </p>
        </div>
    </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // 加载Umami统计
    const umamiScript = document.createElement('script');
    umamiScript.defer = true;
    umamiScript.src = 'https://cloud.umami.is/script.js';
    umamiScript.setAttribute('data-website-id', 'f2b0e739-03a9-4953-813b-a3324f452ace');
    document.head.appendChild(umamiScript);
    
    // 初始化时间功能
    initFooterFunctions();
}

function initFooterFunctions() {
    // 设置正确的建站时间
    const launchDate = new Date('2025-10-11');
    document.getElementById('site-launch-date').textContent = 
        `建站时间: ${launchDate.getFullYear()}-${(launchDate.getMonth()+1).toString().padStart(2, '0')}-${launchDate.getDate().toString().padStart(2, '0')}`;
    
    // 更新运行时间（精确到秒）
    function updateUptime() {
        const now = new Date();
        const uptime = now.getTime() - launchDate.getTime();
        
        if (uptime < 0) {
            document.getElementById('site-uptime').textContent = '运行时间: 刚刚开始';
            return;
        }
        
        const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
        
        document.getElementById('site-uptime').textContent = 
            `运行时间: ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    }
    
    // 更新当前时间
    function updateCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        document.getElementById('current-time').textContent = timeString;
    }
    
    // 初始化所有功能
    updateUptime();
    updateCurrentTime();
    
    // 设置定时更新（每秒更新一次）
    setInterval(updateCurrentTime, 1000);
    setInterval(updateUptime, 1000); // 改为每秒更新运行时间
}

// 页面加载完成后插入footer
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}