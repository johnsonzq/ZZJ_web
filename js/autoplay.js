// 封装的自动播放js文件
//传入的内容包括，哪个做轮播图/圆圈lis/自动播放时间

function autoplay(obj, circle, time) {
    let width = getComputedStyle(obj.children[0]).width.split('p')[0]
    let num = 0

    //轮播图自动播放
    let timer = setInterval(() => {
        num++
        if (num > obj.children.length - 1) {
            num = 0
        }
        let step = width * num;
        // let step = Math.floor(width) * num

        // 调用图片移动的封装动画函数
        animate(obj, Math.floor(-step))
        // animate(obj, -step)

        // 清空所有圆圈按钮current样式
        for (let i = 0; i < circle.length; i++) {
            circle[i].className = ''
        }
        circle[num].className = 'current'
    }, time);
    //绑定每个圆圈按钮点击事件
    for (let i = 0; i < circle.length; i++) {
        circle[i].addEventListener('click', function () {
            // clearInterval(timer)
            num = i
            target = width * num
            animate(obj, -target)
            for (let i = 0; i < circle.length; i++) {
                circle[i].className = ''
            }
            this.className = 'current'
        })
    }

}
//封装的移动动画效果
function animate(obj, target, callback) {
    //  callback = function() {}  调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            callback && callback();
        }
        // 把步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}