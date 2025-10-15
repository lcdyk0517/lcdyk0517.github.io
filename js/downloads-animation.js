// 下载页面动画初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化下载页面动画...');
    
    // 初始化标题动画
    initTitleAnimation();
    
    // 初始化分类切换
    initCategorySwitcher();
    
    // 初始化搜索动画
    initSearchAnimation();
    
    // 初始化卡片动画
    initCardAnimations();
    
    // 初始化悬停效果
    initHoverEffects();
    
    // 初始化滚动动画
    initScrollAnimations();
});

// 标题字符动画
function initTitleAnimation() {
    const titleChars = document.querySelectorAll('.title-char');
    
    titleChars.forEach((char, index) => {
        char.style.animation = `charSlideIn 0.6s ease ${index * 0.1}s both`;
    });
}

// 分类切换动画
function initCategorySwitcher() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const downloadSections = document.querySelectorAll('.download-section');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新按钮状态
            categoryBtns.forEach(b => {
                b.classList.remove('active');
                b.style.transform = 'scale(1)';
            });
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            
            // 动画切换分类
            animateCategorySwitch(category, downloadSections);
        });
    });
}

// 分类切换动画效果
function animateCategorySwitch(category, sections) {
    sections.forEach(section => {
        const sectionCategory = section.getAttribute('data-category');
        
        if (category === 'all' || sectionCategory === category) {
            // 显示匹配的分类
            section.style.display = 'block';
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0) scale(1)';
                section.style.filter = 'blur(0px)';
            }, 50);
        } else {
            // 隐藏不匹配的分类
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px) scale(0.95)';
            section.style.filter = 'blur(5px)';
            setTimeout(() => {
                section.style.display = 'none';
            }, 300);
        }
    });
}

// 搜索框动画
function initSearchAnimation() {
    const searchInput = document.getElementById('search-downloads');
    const searchBox = document.querySelector('.search-box');
    
    if (!searchInput || !searchBox) return;
    
    // 聚焦动画
    searchInput.addEventListener('focus', function() {
        searchBox.classList.add('focused');
        startSearchPulse();
    });
    
    searchInput.addEventListener('blur', function() {
        if (!this.value) {
            searchBox.classList.remove('focused');
            stopSearchPulse();
        }
    });
    
    // 输入动画
    searchInput.addEventListener('input', function() {
        if (this.value) {
            searchBox.classList.add('has-value');
        } else {
            searchBox.classList.remove('has-value');
        }
    });
}

// 搜索脉冲效果
function startSearchPulse() {
    const pulse = document.querySelector('.search-pulse');
    if (pulse) {
        pulse.style.animation = 'searchPulse 2s ease-in-out infinite';
    }
}

function stopSearchPulse() {
    const pulse = document.querySelector('.search-pulse');
    if (pulse) {
        pulse.style.animation = 'none';
    }
}

// 统计数字动画
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(number => observer.observe(number));
}

function animateNumber(element) {
    const target = parseInt(element.textContent);
    let current = 0;
    const increment = target / 30;
    const duration = 1500;
    const stepTime = duration / 30;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
            
            // 添加完成动画
            element.classList.add('completed');
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// 卡片动画
function initCardAnimations() {
    const cards = document.querySelectorAll('.animated-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-in');
    });
}

// 悬停效果
function initHoverEffects() {
    const downloadItems = document.querySelectorAll('.download-item');
    
    downloadItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover-active');
            animateDownloadItem(this);
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover-active');
        });
    });
}

// 下载项悬停动画
function animateDownloadItem(item) {
    const button = item.querySelector('.download-btn');
    if (button) {
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            if (item.classList.contains('hover-active')) {
                button.style.transform = 'scale(1.05)';
            }
        }, 100);
    }
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const elementsToObserve = document.querySelectorAll(
        '.download-stats, .download-categories, .content-card, .download-footer'
    );
    
    elementsToObserve.forEach(element => observer.observe(element));
}

// 计算活跃项目数量
function calculateActiveProjects() {
    const currentYear = 2025; // 当前年份
    const currentMonth = 10;  // 当前月份 (10月)
    
    let activeCount = 0;
    
    // 检查固件项目
    downloadData.firmware.forEach(firmware => {
        if (isProjectActive(firmware, currentYear, currentMonth)) {
            activeCount++;
        }
    });
    
    // 检查工具项目
    downloadData.tools.forEach(tool => {
        if (isProjectActive(tool, currentYear, currentMonth)) {
            activeCount++;
        }
    });
    
    return activeCount;
}

// 判断项目是否活跃 - 修改：没有日期的默认为活跃
function isProjectActive(project, currentYear, currentMonth) {
    // 如果没有日期信息，默认为活跃项目
    if (!project.date || project.date === '') {
        return true;
    }
    
    try {
        // 解析日期 (支持 YYYY-MM-DD 格式)
        const dateParts = project.date.split('-');
        if (dateParts.length < 2) return true; // 日期格式错误也默认为活跃
        
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        
        // 计算月份差异
        const monthDiff = (currentYear - year) * 12 + (currentMonth - month);
        
        // 如果12个月内更新过，认为是活跃项目
        return monthDiff <= 12;
        
    } catch (error) {
        console.warn(`解析项目日期失败: ${project.name}`, error);
        return true; // 解析失败也默认为活跃
    }
}

// 计算GitHub项目数量 - 修复版本
function calculateGitHubProjects() {
    let githubCount = 0;
    
    // 检查固件项目
    downloadData.firmware.forEach(firmware => {
        if (firmware.downloadLinks && 
            firmware.downloadLinks.some(link => link.type === 'github')) {
            githubCount++;
        }
    });
    
    // 检查工具项目
    downloadData.tools.forEach(tool => {
        if (tool.downloadLinks && 
            tool.downloadLinks.some(link => link.type === 'github')) {
            githubCount++;
        }
    });
    
    return githubCount;
}

// 下载计数更新
// 下载计数更新 - 修复版本
function updateDownloadCounts() {
    const firmwareCount = downloadData.firmware.length;
    const toolsCount = downloadData.tools.length;
    const driversCount = downloadData.drivers ? downloadData.drivers.length : 0;
    const docsCount = downloadData.documents ? downloadData.documents.length : 0;
    
    const totalCount = firmwareCount + toolsCount + driversCount + docsCount;
    const githubCount = calculateGitHubProjects();
    const activeCount = calculateActiveProjects();
    
    // 更新徽章计数 - 修复：使用正确的ID
    const firmwareBadge = document.getElementById('firmware-count');
    const toolsBadge = document.getElementById('tools-count');
    const driversBadge = document.getElementById('drivers-count');
    const docsBadge = document.getElementById('docs-count'); // 修复：应该是 docs-count
    
    if (firmwareBadge) firmwareBadge.textContent = firmwareCount;
    if (toolsBadge) toolsBadge.textContent = toolsCount;
    if (driversBadge) driversBadge.textContent = driversCount;
    if (docsBadge) docsBadge.textContent = docsCount;
    
    // 更新统计数字
    const totalElement = document.getElementById('total-downloads');
    const githubElement = document.getElementById('github-projects');
    const activeElement = document.getElementById('active-projects');
    
    if (totalElement) totalElement.textContent = totalCount;
    if (githubElement) githubElement.textContent = githubCount;
    if (activeElement) activeElement.textContent = activeCount;
    
    console.log('项目统计:', {
        总数: totalCount,
        GitHub项目: githubCount,
        活跃项目: activeCount,
        固件: firmwareCount,
        工具: toolsCount,
        驱动: driversCount,
        文档: docsCount
    });
    
    // 调试信息
    console.log('文档数量元素:', docsBadge);
    console.log('文档数据:', downloadData.documents);
}

// 页面加载完成后的效果
window.addEventListener('load', function() {
    // 等待数据加载完成
    const waitForData = setInterval(() => {
        if (window.downloadData && downloadData.firmware && downloadData.firmware.length > 0) {
            clearInterval(waitForData);
            console.log('数据加载完成，开始更新统计:', downloadData.firmware.length);
            
            // 更新计数
            updateDownloadCounts();
            
            // 添加加载完成类
            document.body.classList.add('downloads-loaded');
            
            // 初始化浮动图标
            initFloatingIcons();
            
            // 初始化统计数字动画
            initStatsAnimation();
            
            // 添加背景动画
            initBackgroundAnimation();
        }
    }, 100);
    
    // 10秒超时
    setTimeout(() => {
        clearInterval(waitForData);
        console.warn('数据加载超时');
    }, 10000);
});

// 浮动图标动画
function initFloatingIcons() {
    const icons = document.querySelectorAll('.floating-icon');
    
    icons.forEach((icon, index) => {
        // 随机浮动动画
        const duration = 3 + Math.random() * 2;
        const delay = index * 0.5;
        
        icon.style.animation = `
            floatUpDown ${duration}s ease-in-out ${delay}s infinite alternate
        `;
    });
}

// 背景动画
function initBackgroundAnimation() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    // 创建背景动画元素
    createBackgroundElements();
}

// 创建背景动画元素
function createBackgroundElements() {
    const container = document.querySelector('.container');
    const symbols = ['⚡', '🔧', '💻', '🚀', '🎮', '🔌', '📱', '💾', '🖥️', '🔋'];
    
    // 清理可能存在的旧元素
    const oldElements = document.querySelectorAll('.bg-animation-element');
    oldElements.forEach(el => el.remove());
    
    for (let i = 0; i < 12; i++) {
        const element = document.createElement('div');
        element.className = 'bg-animation-element';
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // 随机样式
        const size = Math.random() * 24 + 16;
        const opacity = Math.random() * 0.15 + 0.05;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        const left = Math.random() * 100;
        
        element.style.cssText = `
            position: fixed;
            font-size: ${size}px;
            opacity: ${opacity};
            left: ${left}%;
            top: 120%;
            animation: bgFloatUp ${duration}s linear ${delay}s infinite;
            z-index: 0;
            pointer-events: none;
            user-select: none;
            color: var(--secondary);
        `;
        
        document.body.appendChild(element);
    }
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 获取项目活跃状态（用于调试）
function getProjectActivityStatus() {
    const currentYear = 2025;
    const currentMonth = 10;
    
    const activityStatus = [];
    
    // 检查所有项目
    [...downloadData.firmware, ...downloadData.tools].forEach(project => {
        const isActive = isProjectActive(project, currentYear, currentMonth);
        activityStatus.push({
            name: project.name,
            date: project.date,
            active: isActive,
            url: project.downloadUrl
        });
    });
    
    console.log('项目活跃状态:', activityStatus);
    return activityStatus;
}

console.log('下载页面动画脚本加载完成');

// 导出函数供调试使用
window.getProjectActivityStatus = getProjectActivityStatus;