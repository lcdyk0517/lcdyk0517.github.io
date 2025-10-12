// 常见问题数据
const faqData = [
    {
        id: 'faq-1',
        question: 'R36S设备无法开机怎么办？',
        answer: '如果设备无法开机，请尝试以下步骤：<br>1. 检查充电器和数据线是否正常工作<br>2. 长按电源键15秒强制重启<br>3. 连接充电器充电30分钟后再尝试开机<br>4. 如果以上方法无效，可能需要进入恢复模式刷机'
    },
    {
        id: 'faq-2',
        question: '如何进入刷机模式？',
        answer: '进入刷机模式的方法：<br>1. 关机状态下同时按住音量+和电源键<br>2. 出现品牌Logo后松开电源键，继续按住音量+<br>3. 进入恢复模式后使用刷机工具连接<br>注意：不同版本可能按键组合略有不同'
    },
    {
        id: 'faq-3',
        question: 'WiFi连接不稳定如何解决？',
        answer: 'WiFi连接问题解决方案：<br>1. 重启路由器和设备<br>2. 忘记网络后重新连接<br>3. 检查路由器信道设置，建议使用1、6、11信道<br>4. 更新设备固件到最新版本<br>5. 重置网络设置'
    },
    {
        id: 'faq-4',
        question: '设备发热严重怎么办？',
        answer: '设备发热处理建议：<br>1. 关闭不必要的后台应用<br>2. 降低屏幕亮度<br>3. 避免边充电边使用<br>4. 使用官方充电器<br>5. 更新到最新固件版本<br>6. 如持续发热，建议联系售后'
    },
    {
        id: 'faq-5',
        question: '如何备份设备数据？',
        answer: '数据备份方法：<br>1. 使用系统自带的备份功能<br>2. 通过ADB命令备份重要数据<br>3. 使用第三方备份应用<br>4. 将重要文件手动复制到电脑或云存储<br>建议在刷机前务必完成数据备份'
    },
    {
        id: 'faq-6',
        question: '刷机失败如何恢复？',
        answer: '刷机失败恢复步骤：<br>1. 不要断开USB连接<br>2. 重新下载完整的固件包<br>3. 使用官方刷机工具重试<br>4. 尝试不同的USB端口<br>5. 在另一台电脑上尝试刷机<br>6. 如仍失败，可能需要送修'
    }
];

// 加载常见问题
function loadFAQ() {
    const list = document.getElementById('faq-list');
    list.innerHTML = faqData.map(item => `
        <li class="faq-item">
            <div class="faq-question" data-faq="${item.id}">
                <h4>${item.question}</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer" id="answer-${item.id}">
                ${item.answer}
            </div>
        </li>
    `).join('');

    setupFAQInteractions();
    setupFAQSearch();
}

// 设置FAQ交互
function setupFAQInteractions() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqId = this.getAttribute('data-faq');
            const answer = document.getElementById(`answer-${faqId}`);
            const icon = this.querySelector('i');
            
            // 切换显示/隐藏
            answer.classList.toggle('active');
            
            // 切换图标
            if (answer.classList.contains('active')) {
                icon.className = 'fas fa-chevron-up';
            } else {
                icon.className = 'fas fa-chevron-down';
            }
        });
    });
}

// 设置FAQ搜索
function setupFAQSearch() {
    const searchInput = document.getElementById('search-faq');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('h4').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                
                // 如果搜索词在答案中，自动展开
                if (answer.includes(searchTerm) && !searchTerm.includes(question)) {
                    const answerElem = item.querySelector('.faq-answer');
                    const icon = item.querySelector('.faq-question i');
                    if (!answerElem.classList.contains('active')) {
                        answerElem.classList.add('active');
                        icon.className = 'fas fa-chevron-up';
                    }
                }
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', loadFAQ);