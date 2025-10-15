// 完整的微信公众号配置
const WECHAT_CONFIG = {
    publicName: 'KK玩寨机',
    defaultMessage: '请关注微信公众号获取下载链接',
    systems: {
        'Rocknix MOD': {
            publicName: 'KK玩寨机',
            customMessage: '关注公众号后点击系统下载->rocknix获取下载链接',
            keyword: 'Rocknix MOD'
        },
        // 可以为其他系统添加特定配置
        'default': {
            publicName: 'KK玩寨机',
            customMessage: '请关注微信公众号获取下载链接'
        }
    },
    
    // 获取系统特定的微信公众号配置
    getSystemConfig(systemName) {
        return this.systems[systemName] || this.systems['default'];
    }
};
// 下载数据 - 优化版本
const downloadData = {
    firmware: [
        {
            id: 'firmware-1',
            name: 'Rocknix MOD',
            version: '',
            date: '',
            size: '3.88 GB',
            description: '由KK大佬维护的Rocknix Mod让克隆机的可玩性大大提升，还有很多符合中国玩家的优化',
            compatibility: ['原版R36S', '克隆R36S'],
            isRecommended: true, // 添加推荐标记
            theme: 'gold',
            downloadLinks: [ // 改为数组支持多个链接
                {
                    type: 'wechat',
                    name: '关注公众号获取',
                    url: '#',
                    icon: 'fab fa-weixin',
                    color: '#07c160'
                }
            ]
        },
        {
            id: 'firmware-2',
            name: 'ArkOS4Clone',
            version: '20250929',
            date: '2025-09-29',
            size: '3.77 GB',
            description: 'lcdyk和kk维护开发的基于4.4内核的arkos，初衷为兼容自身手上拥有的设备',
            compatibility: ['原版R36S', '克隆R36S', '酱油R36S'],
            isRecommended: true,
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/lcdyk0517/arkos4clone',
                    icon: 'fab fa-github',
                    color: '#333'
                },
                {
                    type: 'baidu',
                    name: '百度网盘',
                    url: 'https://pan.baidu.com/s/1mfIaflb8FfJO_gBZD9uUwg?pwd=lc66',
                    icon: 'fas fa-cloud-download-alt',
                    color: '#2932e1'
                }
            ]
        },
        {
            id: 'firmware-3',
            name: 'ArkOS K36',
            version: '08112025',
            date: '2025-08-11',
            size: '1.92 GB',
            description: '使用克隆5.10.16内核的ArkOS，该系统已经归档',
            compatibility: ['克隆R36S'],
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/AeolusUX/ArkOS-K36',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        },
        {
            id: 'firmware-4',
            name: 'ArkOS R3XS',
            version: '07312025-1',
            date: '2025-09-02',
            size: '2.6 GB',
            description: '由aeux维护的4.4内核arkos，主要支持原版设备',
            compatibility: ['原版R36S', 'R36sPlus', '酱油36S'],
            isRecommended: true,
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/AeolusUX/ArkOS-R3XS',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        },
        {
            id: 'firmware-5',
            name: 'Rocknix WIP',
            version: 'k36-emmc-wip',
            date: '2023-09-20',
            size: '1.54 GB',
            description: 'Stolen开发维护的WiP版本Rocknix',
            compatibility: ['克隆R36S'],
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/stolen/r.nix-distribution/releases/tag/k36-emmc-wip',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        },
        {
            id: 'firmware-6',
            name: 'Rocknix',
            version: '20250517',
            date: '2025-05-17',
            size: '1.53 GB',
            description: '基于长期支持的内核版本开发的系统，可玩性最高',
            compatibility: ['原版R36S'],
            isRecommended: true,
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/ROCKNIX/distribution',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        },
        {
            id: 'firmware-7',
            name: 'Rocknix每夜构建',
            version: '',
            date: '',
            size: '',
            description: '基于长期支持的内核版本开发的系统,可玩性最高,每夜构建属于测试版本可能会存在bug，克隆设备需要去网站生成dtbo才可开机',
            compatibility: ['原版R36S', '克隆R36S'],
            downloadLinks: [
                {
                    type: 'website',
                    name: '访问网站',
                    url: 'https://nightly.rocknix.org/',
                    icon: 'fas fa-external-link-alt',
                    color: '#007bff'
                }
            ]
        },
        {
            id: 'firmware-8',
            name: 'UnofficialOS',
            version: '20251005',
            date: '2025-10-05',
            size: '1.35 GB',
            description: '由RetroFGX维护的UOS，内核为主线内核，部分设备可能需要重新生成dtbo',
            compatibility: ['原版R36S', '克隆R36S'],
            isRecommended: true,
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/RetroGFX/UnofficialOS/',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        },
        {
            id: 'firmware-9',
            name: 'Amberelec',
            version: '20250515_1801',
            date: '2025-05-15',
            size: '1.02 GB',
            description: '前身为351ELEC,内核为BSP4.4版本',
            compatibility: ['原版R36S'],
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/AmberELEC/AmberELEC-prerelease',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        },
        {
            id: 'firmware-10',
            name: 'PAN4elec',
            version: '20250315',
            date: '2025-03-15',
            size: '1.4 GB',
            description: 'Amberelec的魔改版,给原版Panel4的设备优化魔改的一个系统',
            compatibility: ['原版R36S Panel4'],
            downloadLinks: [
                {
                    type: 'github',
                    name: 'GitHub',
                    url: 'https://github.com/Kegg1701/P4ELEC/releases',
                    icon: 'fab fa-github',
                    color: '#333'
                }
            ]
        }
    ],
    tools: [
        {
            id: 'tool-1',
            name: 'Rocknix dtbo网页生成工具',
            version: '',
            date: '',
            size: '',
            description: '克隆机请使用机器中自带的dtb去网页中生成dtbo',
            platform: '',
            downloadLinks: [
                {
                    type: 'website',
                    name: '访问工具',
                    url: 'https://rocknix.gosk.in/dtbo/',
                    icon: 'fas fa-external-link-alt',
                    color: '#007bff'
                }
            ]
        },
        {
            id: 'tool-2',
            name: 'UnofficialOS dtbo网页生成工具',
            version: '',
            date: '',
            size: '',
            description: '克隆机请使用机器中自带的dtb去网页中生成dtbo',
            platform: '',
            downloadLinks: [
                {
                    type: 'website',
                    name: '访问工具',
                    url: 'https://overlays.unofficialos.org/',
                    icon: 'fas fa-external-link-alt',
                    color: '#007bff'
                }
            ]
        }
    ],
    documents: [
        {
            id: 'documents-1',
            name: 'windstarry整理的Ports游戏',
            version: '',
            date: '',
            size: '',
            description: 'windstarry一个一个测试的Ports游戏',
            platform: '',
            downloadLinks: [
                {
                    type: 'baidu',
                    name: '百度网盘',
                    url: 'https://pan.baidu.com/s/1c0wGlP2AFODkpr-FDi9bSw?pwd=vryz',
                    icon: 'fas fa-cloud-download-alt',
                    color: '#2932e1'
                }
            ]
        },
    ]
};

// 加载下载内容
function loadDownloads() {
    loadFirmware();
    loadTools();
    loadDrivers();
    loadDocuments();
    setupSearch();
    updateDownloadCounts();
}

// 工具函数：检查值是否为空
function isEmpty(value) {
    return value === null || value === undefined || value === '' || value === ' ';
}

// 工具函数：生成元数据HTML
function generateMetaHTML(item, metaFields) {
    const metaItems = [];
    
    metaFields.forEach(field => {
        if (!isEmpty(item[field.key])) {
            metaItems.push(`
                <span>
                    <i class="${field.icon}"></i> 
                    ${item[field.key]}
                </span>
            `);
        }
    });
    
    if (metaItems.length > 0) {
        return `<div class="download-meta">${metaItems.join('')}</div>`;
    }
    return '';
}

// 工具函数：判断链接类型并生成按钮
function generateButtonHTML(item) {
    const url = item.downloadUrl || '#';
    const isGitHub = url.includes('github.com');
    const isExternal = url.includes('http') && !isGitHub;
    
    let buttonText = '下载';
    let buttonIcon = 'fas fa-download';
    
    if (isGitHub) {
        buttonText = 'GitHub';
        buttonIcon = 'fab fa-github';
    } else if (isExternal) {
        buttonText = '访问';
        buttonIcon = 'fas fa-external-link-alt';
    }
    
    return `
        <a href="${url}" target="_blank" class="download-btn" data-url="${url}">
            <i class="${buttonIcon}"></i> ${buttonText}
        </a>
    `;
}

// 工具函数：生成下载按钮组
function generateDownloadButtons(item) {
    if (!item.downloadLinks || item.downloadLinks.length === 0) {
        return '<div class="no-download">暂无下载</div>';
    }

    return `
        <div class="download-buttons">
            ${item.downloadLinks.map(link => {
                // 修复：使用正确的微信公众号配置
                if (link.type === 'wechat') {
                    const wechatConfig = WECHAT_CONFIG.getSystemConfig(item.name);
                    return `
                        <a href="${link.url}" target="_blank" class="download-btn ${link.type}" 
                           style="--btn-color: ${link.color}" 
                           data-type="${link.type}"
                           data-public-name="${wechatConfig.publicName}" 
                           data-custom-message="${wechatConfig.customMessage}">
                            <i class="${link.icon}"></i> ${link.name}
                        </a>
                    `;
                } else {
                    return `
                        <a href="${link.url}" target="_blank" class="download-btn ${link.type}" 
                           style="--btn-color: ${link.color}" 
                           data-type="${link.type}">
                            <i class="${link.icon}"></i> ${link.name}
                        </a>
                    `;
                }
            }).join('')}
        </div>
    `;
}

// 工具函数：生成推荐标记 - 优化版本
function generateRecommendationBadge(item) {
    if (item.isRecommended) {
        return `
            <div class="recommendation-badge">
                <i class="fas fa-star"></i>推荐
            </div>
        `;
    }
    return '';
}

// 微信公众号提示功能 - 优化版本
function setupWechatTooltips() {
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.download-btn.wechat')) {
            const btn = e.target.closest('.download-btn.wechat');
            const publicName = btn.getAttribute('data-public-name') || WECHAT_CONFIG.publicName;
            const customMessage = btn.getAttribute('data-custom-message') || WECHAT_CONFIG.message;
            
            // 创建提示框
            const tooltip = document.createElement('div');
            tooltip.className = 'wechat-tooltip';
            tooltip.innerHTML = `
                <div class="tooltip-content">
                    <i class="fab fa-weixin"></i>
                    <div class="tooltip-text">
                        <strong>${customMessage}</strong>
                        <br>
                        <span class="public-name">公众号：${publicName}</span>
                    </div>
                </div>
                <div class="tooltip-arrow"></div>
            `;
            
            // 设置样式
            tooltip.style.cssText = `
                position: absolute;
                top: -100px;
                left: 50%;
                transform: translateX(-50%);
                background: #333;
                color: white;
                padding: 1rem;
                border-radius: 10px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                border: 1px solid #07c160;
            `;
            
            btn.style.position = 'relative';
            btn.appendChild(tooltip);
            btn.classList.add('wechat-popup');
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.download-btn.wechat')) {
            const btn = e.target.closest('.download-btn.wechat');
            const tooltip = btn.querySelector('.wechat-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
            btn.classList.remove('wechat-popup');
        }
    });
}

// 微信公众号功能 - 整合悬浮提示和点击弹窗
function setupWechatFeatures() {
    const wechatModal = document.getElementById('wechatModal');
    const wechatPublicName = document.getElementById('wechatPublicName');
    const wechatMessage = document.getElementById('wechatMessage');
    const copyWechatName = document.getElementById('copyWechatName');
    const wechatClose = document.querySelector('.wechat-close');
    
    let currentPublicName = '';
    
    // 悬浮提示功能
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.download-btn.wechat')) {
            const btn = e.target.closest('.download-btn.wechat');
            const publicName = btn.getAttribute('data-public-name') || WECHAT_CONFIG.publicName;
            const customMessage = btn.getAttribute('data-custom-message') || WECHAT_CONFIG.message;
            
            // 创建提示框
            const tooltip = document.createElement('div');
            tooltip.className = 'wechat-tooltip';
            tooltip.innerHTML = `
                <div class="tooltip-content">
                    <i class="fab fa-weixin"></i>
                    <div class="tooltip-text">
                        <strong>${customMessage}</strong>
                        <br>
                        <span class="public-name">公众号：${publicName}</span>
                    </div>
                </div>
                <div class="tooltip-arrow"></div>
            `;
            
            btn.style.position = 'relative';
            btn.appendChild(tooltip);
            btn.classList.add('wechat-popup');
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.download-btn.wechat')) {
            const btn = e.target.closest('.download-btn.wechat');
            const tooltip = btn.querySelector('.wechat-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
            btn.classList.remove('wechat-popup');
        }
    });
    
    // 点击弹窗功能
    document.addEventListener('click', function(e) {
        if (e.target.closest('.download-btn.wechat')) {
            e.preventDefault();
            const btn = e.target.closest('.download-btn.wechat');
            currentPublicName = btn.getAttribute('data-public-name') || WECHAT_CONFIG.publicName;
            const customMessage = btn.getAttribute('data-custom-message') || WECHAT_CONFIG.message;
            
            // 更新弹窗内容
            wechatPublicName.textContent = currentPublicName;
            wechatMessage.textContent = customMessage;
            
            // 显示弹窗
            wechatModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
    
    // 复制功能
    copyWechatName.addEventListener('click', function() {
        navigator.clipboard.writeText(currentPublicName).then(() => {
            const originalHTML = copyWechatName.innerHTML;
            copyWechatName.innerHTML = '<i class="fas fa-check"></i> 已复制';
            copyWechatName.classList.add('copied');
            
            setTimeout(() => {
                copyWechatName.innerHTML = originalHTML;
                copyWechatName.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            alert(`复制失败，请手动复制：${currentPublicName}`);
        });
    });
    
    // 关闭弹窗
    wechatClose.addEventListener('click', function() {
        wechatModal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // 点击背景关闭
    wechatModal.addEventListener('click', function(e) {
        if (e.target === wechatModal) {
            wechatModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && wechatModal.style.display === 'block') {
            wechatModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

function loadFirmware() {
    const list = document.getElementById('firmware-list');
    if (!list) return;
    
    list.innerHTML = downloadData.firmware.map(item => {
        const metaHTML = generateMetaHTML(item, [
            { key: 'version', icon: 'fas fa-tag' },
            { key: 'date', icon: 'far fa-calendar' },
            { key: 'size', icon: 'fas fa-weight-hanging' }
        ]);
        
        const compatibilityHTML = !isEmpty(item.compatibility) ? 
            `<span><i class="fas fa-microchip"></i> ${Array.isArray(item.compatibility) ? item.compatibility.join(', ') : item.compatibility}</span>` : '';
        
        const buttonsHTML = generateDownloadButtons(item);
        const recommendationBadge = generateRecommendationBadge(item);
        
        return `
            <li class="download-item ${item.isRecommended ? 'recommended' : ''}">
                ${recommendationBadge}
                <div class="download-header">
                    <div class="download-info">
                        <div class="download-title-row">
                            <h4>${item.name}</h4>
                        </div>
                        <p>${item.description}</p>
                        ${metaHTML}
                        ${compatibilityHTML ? `<div class="download-meta">${compatibilityHTML}</div>` : ''}
                    </div>
                    ${buttonsHTML}
                </div>
            </li>
        `;
    }).join('');
}

function loadTools() {
    const list = document.getElementById('tools-list');
    if (!list) return;
    
    list.innerHTML = downloadData.tools.map(item => {
        const metaHTML = generateMetaHTML(item, [
            { key: 'version', icon: 'fas fa-tag' },
            { key: 'date', icon: 'far fa-calendar' },
            { key: 'size', icon: 'fas fa-weight-hanging' },
            { key: 'platform', icon: 'fas fa-desktop' }
        ]);
        
        // ✅ 使用新的按钮生成函数
        const buttonsHTML = generateDownloadButtons(item);
        
        return `
            <li class="download-item">
                <div class="download-header">
                    <div class="download-info">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                        ${metaHTML}
                    </div>
                    ${buttonsHTML} <!-- 现在会正确生成访问按钮 -->
                </div>
            </li>
        `;
    }).join('');
}

function loadDrivers() {
    const list = document.getElementById('drivers-list');
    if (!list) return;
    
    if (downloadData.drivers && downloadData.drivers.length > 0) {
        list.innerHTML = downloadData.drivers.map(item => {
            const metaHTML = generateMetaHTML(item, [
                { key: 'version', icon: 'fas fa-tag' },
                { key: 'date', icon: 'far fa-calendar' },
                { key: 'size', icon: 'fas fa-weight-hanging' },
                { key: 'platform', icon: 'fas fa-desktop' }
            ]);
            
            const buttonHTML = generateButtonHTML(item);
            
            return `
                <li class="download-item">
                    <div class="download-header">
                        <div class="download-info">
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                            ${metaHTML}
                        </div>
                        ${buttonHTML}
                    </div>
                </li>
            `;
        }).join('');
    } else {
        list.innerHTML = '<li class="download-item"><div class="download-info"><p>暂无驱动程序</p></div></li>';
    }
}

function loadDocuments() {
    const list = document.getElementById('docs-list');
    if (!list) return;
    
    // 修复：使用正确的数据字段 documents（不是 documents）
    if (downloadData.documents && downloadData.documents.length > 0) {
        list.innerHTML = downloadData.documents.map(item => {
            const metaHTML = generateMetaHTML(item, [
                { key: 'version', icon: 'fas fa-tag' },
                { key: 'date', icon: 'far fa-calendar' },
                { key: 'size', icon: 'fas fa-weight-hanging' }
            ]);
            
            // 修复：使用新的按钮生成函数
            const buttonsHTML = generateDownloadButtons(item);
            
            return `
                <li class="download-item">
                    <div class="download-header">
                        <div class="download-info">
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                            ${metaHTML}
                        </div>
                        ${buttonsHTML}
                    </div>
                </li>
            `;
        }).join('');
    } else {
        list.innerHTML = '<li class="download-item"><div class="download-info"><p>暂无文档资源</p></div></li>';
    }
}

function setupSearch() {
    const searchInput = document.getElementById('search-downloads');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // 搜索所有下载项
        const allItems = document.querySelectorAll('.download-item');
        allItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// 添加点击统计（可选）
function setupDownloadTracking() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.download-btn')) {
            const button = e.target.closest('.download-btn');
            const url = button.getAttribute('data-url');
            console.log('用户点击下载:', url);
            // 这里可以添加统计代码
        }
    });
}

// 系统名称搜索关键词映射（用于在页面中查找对应项）
const systemSearchKeywords = {
    'Rocknix MOD': 'Rocknix MOD',
    'Rocknix': 'Rocknix',
    'Rocknix WIP': 'Rocknix WIP',
    'Rocknix每夜构建': 'Rocknix每夜构建',
    'Arkos4Clone': 'ArkOS4Clone',
    'ArkOS K36': 'ArkOS K36',
    'ArkOS R3XS': 'ArkOS R3XS',
    'UnofficialOS': 'UnofficialOS',
    'Amberelec': 'Amberelec',
    'PAN4elec': 'PAN4elec',
    'Rocknix dtbo网页生成工具': 'Rocknix dtbo网页生成工具',
    'UnofficialOS dtbo网页生成工具': 'UnofficialOS dtbo网页生成工具'
};

// 定位到特定系统
function scrollToSystem() {
    const targetSystem = sessionStorage.getItem('targetSystem');
    if (targetSystem) {
        console.log('正在定位系统:', targetSystem);
        
        // 清除存储
        sessionStorage.removeItem('targetSystem');
        
        // 延迟执行以确保页面加载完成
        setTimeout(() => {
            const exactName = systemSearchKeywords[targetSystem];
            if (exactName) {
                // 查找包含该系统名称的下载项
                const allDownloadItems = document.querySelectorAll('.download-item');
                let targetItem = null;
                
                allDownloadItems.forEach(item => {
                    // 获取下载项的名称（通常是h4标签内的文本）
                    const itemName = item.querySelector('h4')?.textContent?.trim();
                    
                    // 完全匹配
                    if (itemName === exactName) {
                        targetItem = item;
                    }
                });
                
                if (targetItem) {
                    console.log('找到目标系统项:', targetSystem);
                    
                    // 滚动到目标项
                    targetItem.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    // 添加高亮效果
                    targetItem.style.backgroundColor = 'rgba(78, 201, 176, 0.3)';
                    targetItem.style.border = '2px solid #4EC9B0';
                    targetItem.style.borderRadius = '10px';
                    targetItem.style.transition = 'all 0.3s ease';
                    
                    // 添加脉冲动画效果
                    targetItem.style.animation = 'pulse-highlight 2s ease-in-out';
                    
                    // 5秒后移除高亮
                    setTimeout(() => {
                        targetItem.style.backgroundColor = '';
                        targetItem.style.border = '';
                        targetItem.style.animation = '';
                    }, 5000);
                } else {
                    console.log('未找到系统项:', targetSystem);
                    // 如果没找到，滚动到固件系统区域
                    const firmwareSection = document.querySelector('.download-section[data-category="firmware"]');
                    if (firmwareSection) {
                        firmwareSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        }, 800); // 增加延迟确保页面完全加载
    }
}

// 添加CSS动画
function addHighlightAnimation() {
    if (!document.getElementById('system-highlight-animation')) {
        const style = document.createElement('style');
        style.id = 'system-highlight-animation';
        style.textContent = `
            @keyframes pulse-highlight {
                0% { box-shadow: 0 0 0 0 rgba(78, 201, 176, 0.7); }
                50% { box-shadow: 0 0 0 10px rgba(78, 201, 176, 0); }
                100% { box-shadow: 0 0 0 0 rgba(78, 201, 176, 0); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadDownloads();
    setupDownloadTracking();
    addHighlightAnimation();
    scrollToSystem();
    setupWechatFeatures(); // 确保这个只调用一次
});