var seeding = document.querySelector('.seeding')
var img3 = seeding.querySelectorAll('img')
var seeding = document.querySelector('.seeding')
var ul = seeding.querySelector('ul')
var li3 = ul.querySelectorAll('li')
console.log(li3);
var picIndex = 0

// 遍历图片 让图片轮播
setInterval(function () {
    picIndex == 2 ? (picIndex = 0) : picIndex++
}, 4000)


setInterval(function(){
    // img表示图片
    // 让所有的图片层级为0
    img3.forEach(function (img) {
        img.style.zIndex = 0
        img.style.opacity = 0
    })
    // 让遍历的img层级为1
    img3[picIndex].style.zIndex = 1;
    img3[picIndex].style.opacity = 1
    img3[picIndex].style.transition = 'all 1s'
    // li表示小点
    // 遍历 所有li 
    li3.forEach(function (li, index) {
        // 让所有小点恢复默认样式
        li.setAttribute('class', '');
        // 让和img 索引相同的小点样式改变
        if (index == picIndex) {
            li.setAttribute('class', 'on')
        }
        // 点击小点 把小点的索引给图片
        li.onclick = function () {
            picIndex = index;
        }
    })
},20)