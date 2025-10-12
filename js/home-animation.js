// 首页动画初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化首页动画...');
    
    // 等待页面完全加载后再初始化粒子
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParticles);
    } else {
        setTimeout(initParticles, 100);
    }
    
    // 初始化打字机效果
    initTypingEffect();
    
    // 添加滚动动画
    initScrollAnimations();
    
    // 添加鼠标移动效果
    initMouseEffects();
    
    // 页面加载完成后的效果
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        createFloatingElements();
    });
});

// 粒子动画配置
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        console.log('初始化粒子动画...');
        
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            // 确保粒子容器样式正确
            particlesContainer.style.position = 'fixed';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.zIndex = '-1';
            particlesContainer.style.pointerEvents = 'none';
            
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#6C63FF', '#00D4FF', '#FF2E63']
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 120,
                        color: '#6C63FF',
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 120,
                            line_linked: {
                                opacity: 0.2
                            }
                        },
                        push: {
                            particles_nb: 3
                        }
                    }
                },
                retina_detect: true
            });
            
            console.log('粒子动画初始化完成');
        } else {
            console.warn('粒子容器未找到');
        }
    } else {
        console.warn('particles.js 库未加载');
    }
}

// 打字机效果
function initTypingEffect() {
    const texts = [
        '探索无限可能',
        '解锁设备潜力', 
        '加入开源社区',
        '创造个性体验'
    ];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) {
        console.warn('打字机元素未找到');
        return;
    }
    
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // 删除文字
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // 输入文字
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // 判断状态切换
        if (!isDeleting && charIndex === currentText.length) {
            // 完成输入，等待后开始删除
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            // 完成删除，切换到下一段文字
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // 启动打字效果
    setTimeout(type, 1000);
    console.log('打字机效果初始化完成');
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
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.animated-card');
    animatedElements.forEach(card => {
        observer.observe(card);
    });
    
    console.log(`滚动动画初始化完成，观察 ${animatedElements.length} 个元素`);
}

// 鼠标移动效果
function initMouseEffects() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (floatingCards.length === 0) return;
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    console.log('鼠标移动效果初始化完成');
}

// 创建随机漂浮元素
function createFloatingElements() {
    const container = document.querySelector('.hero');
    if (!container) return;
    
    const symbols = ['⚡', '🔧', '💻', '🚀', '🎮', '🔌', '📱', '💾'];
    
    // 清理可能存在的旧元素
    const oldSymbols = document.querySelectorAll('.floating-symbol');
    oldSymbols.forEach(symbol => symbol.remove());
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.className = 'floating-symbol';
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // 随机样式
        const size = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.3 + 0.1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        element.style.cssText = `
            position: absolute;
            font-size: ${size}px;
            opacity: ${opacity};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatSymbol ${duration}s linear ${delay}s infinite;
            z-index: 0;
            pointer-events: none;
            user-select: none;
        `;
        
        container.appendChild(element);
    }
    
    console.log('漂浮元素创建完成');
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

// 窗口调整大小时重新初始化粒子
const debouncedResize = debounce(function() {
    if (typeof particlesJS !== 'undefined' && window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}, 250);

window.addEventListener('resize', debouncedResize);

// 错误处理
window.addEventListener('error', function(e) {
    console.error('动画脚本错误:', e.error);
});

// 导出函数供其他脚本使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initParticles,
        initTypingEffect,
        initScrollAnimations,
        initMouseEffects,
        createFloatingElements
    };
}

console.log('首页动画脚本加载完成');