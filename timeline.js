document.addEventListener('DOMContentLoaded', function() {
    // 为每个时间线项目添加图片
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // 定义可用的图片（按时间顺序排列）
    const availableImages = [
        '1895-timeline.jpg',
        '1909-timeline.jpg',
        '1927-timeline.jpg',
        '1930-timeline.jpg',
        '1949-timeline.jpg',
        '1950-timeline.jpg',
        '1978-timeline.jpeg',
        '1990-timeline.jpg',
        '1991-timeline.jpg',
        '1995-timeline.jpg',
        '2001-timeline.jpeg',
        '2010-timeline.jpg',
        '2013-timeline.jpg',
        '2016-timeline.png',
        '2019-timeline.jpg',
        '2021-timeline.jpg',
        '2023-timeline.jpg'
    ];
    
    timelineItems.forEach((item) => {
        // 获取时间线项目的年份
        const yearElement = item.querySelector('h3');
        const year = yearElement ? yearElement.textContent.match(/\d{4}/)[0] : null;
        
        // 创建图片容器
        const imageContainer = document.createElement('div');
        imageContainer.className = 'timeline-image';
        
        // 查找匹配的图片
        const matchingImage = availableImages.find(img => img.startsWith(year));
        
        if (matchingImage) {
            // 如果找到匹配的图片，创建并添加图片元素
            const img = document.createElement('img');
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.src = './images/timeline picture/' + matchingImage;
            imageContainer.appendChild(img);
        }
        // 如果没有找到匹配的图片，imageContainer将保持为空，CSS会显示为空白区域
        
        // 添加图片容器到时间线项目
        item.appendChild(imageContainer);
        
        // 添加点击事件处理
        item.addEventListener('click', function() {
            // 移除其他项目的active类
            timelineItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切换当前项目的active类
            item.classList.toggle('active');
        });
    });

    // 添加时代标题的动画
    const eraTitles = document.querySelectorAll('.era-title');
    eraTitles.forEach(title => {
        title.classList.add('animate');
    });
}); 