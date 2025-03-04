document.addEventListener('DOMContentLoaded', function() {
    // 获取语言切换按钮
    const enBtn = document.getElementById('en-btn');
    const zhBtn = document.getElementById('zh-btn');
    const floatEnBtn = document.getElementById('float-en-btn');
    const floatZhBtn = document.getElementById('float-zh-btn');
    
    // 设置初始状态
    zhBtn.classList.add('active');
    
    // 切换到英文
    function switchToEnglish() {
        document.body.classList.add('english');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
        localStorage.setItem('language', 'english');
    }
    
    // 切换到中文
    function switchToChinese() {
        document.body.classList.remove('english');
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
        localStorage.setItem('language', 'chinese');
    }
    
    // 绑定语言切换事件
    enBtn.addEventListener('click', switchToEnglish);
    zhBtn.addEventListener('click', switchToChinese);
    floatEnBtn.addEventListener('click', switchToEnglish);
    floatZhBtn.addEventListener('click', switchToChinese);
    
    // 检查并应用保存的语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'english') {
        document.body.classList.add('english');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
    }
    
    // 导航栏控制
    const header = document.querySelector('header');
    const floatingNav = document.querySelector('.floating-nav');
    const moreActions = document.querySelector('.more-actions');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let lastScrollY = window.scrollY;
    let headerHeight = header.offsetHeight;
    let isFloatingNavVisible = false;
    
    // 滚动处理
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // 向下滚动且超过header高度
        if (currentScrollY > headerHeight && currentScrollY > lastScrollY) {
            if (!isFloatingNavVisible) {
                header.style.transform = 'translateY(-100%)';
                floatingNav.classList.add('visible');
                isFloatingNavVisible = true;
            }
        }
        // 向上滚动到顶部附近
        else if (currentScrollY < headerHeight - 50) {
            if (isFloatingNavVisible) {
                header.style.transform = 'translateY(0)';
                floatingNav.classList.remove('visible');
                dropdownMenu.classList.remove('show');
                isFloatingNavVisible = false;
            }
        }
        
        lastScrollY = currentScrollY;
    });
    
    // 更多选项按钮点击处理
    moreActions.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
    
    // 阻止下拉菜单内的点击事件冒泡
    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // 添加图片懒加载
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        });
    }, imageOptions);
    
    images.forEach(img => imageObserver.observe(img));
}); 