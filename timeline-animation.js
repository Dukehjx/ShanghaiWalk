document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const eraTitles = document.querySelectorAll('.era-title');
    
    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.2, // 当元素20%可见时触发
        rootMargin: '0px 0px -100px 0px' // 提前触发动画
    });

    // 观察所有时间线项目
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // 观察所有时代标题
    eraTitles.forEach(title => {
        observer.observe(title);
    });
}); 