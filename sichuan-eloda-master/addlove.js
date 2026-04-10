window.onload = function () {
    var lunbo = document.querySelector('.lunbo')
    lunbo.style = 'top:0; opacity: 1;'
    bannerIerval = setInterval(bannerAuto, 5000);
}
var ul = document.querySelector('.seven')    //7张图片父级
var img7 = ul.querySelectorAll('li')         //7张图片
var zuo = document.querySelector('.zuo')     // 左小点
var you = document.querySelector('.you')     // 右小点
var point = document.querySelector('.point') //7个轮播小点父级
var li7 = point.querySelectorAll('li')       //7个轮播小点
var picIndex = 0;
var bannerIerval


//把自动轮播对picIndex 的操作封装在函数中
var bannerAuto = function () {
    picIndex == 6 ? (picIndex = 0) : picIndex++;
}
zuo.onclick = function () {
    picIndex = picIndex == 0 ? 6 : picIndex - 1;
}
you.onclick = function () {
    picIndex = picIndex == 6 ? 0 : picIndex + 1;
}
// 时刻去判断picIndex 将picIndex对应的图片层级设置高一点
setInterval(function () {
    img7.forEach(function (img) {
        // img.style.zIndex = 0
        img.style.opacity = 0
    })
    // img7[picIndex].style.zIndex = 1
    img7[picIndex].style.opacity = 1
    img7[picIndex].style.transition = 'all 1s'
    // 时刻判断断点和picIndex 的关系
    li7.forEach(function (li, index) {
        li.setAttribute('class', '');
        if (index == picIndex) {
            li.setAttribute('class', 'on')
        }
        li.onmouseenter = function () {
            picIndex = index
        }
    })
}, 10);



//                                                   蛋糕
var box_left = document.querySelector('.box_left')
var box_right = document.querySelector('.box_right')
var box_ul = document.querySelectorAll('.box_ul')
var chang = document.querySelector('.chang')

var yidong = [0, -4800, -3600, -2400, -1200];
var i = 0

chang.style.transform = 'translateX(' + yidong[i] + 'px)';
box_left.onclick = function () {
    i++
    if (i == 5) {
        i = 0
    }
    chang.style.transform = 'translateX(' + yidong[i] + 'px)';
}
box_right.onclick = function () {
    i--
    if (i == -1) {
        i = 4
    }
    chang.style.transform = 'translateX(' + yidong[i] + 'px)';
    console.log(i);
}
//                                                   蛋糕


//                                                  监听

var nav_dig = document.querySelector('.nav_dig')
var main_left = document.querySelector('.main_left')
var right = document.querySelector('#right')
var main_product = document.querySelector('.main_product')
var audio = document.querySelector('.audio')
var latest_bx = document.querySelector('.latest_bx')
var adlsykj = document.querySelector('.adlsykj')
var company = document.querySelector('.company')
var section_tit = document.querySelector('.section_tit')
var job = document.querySelector('.job')
var body = document.querySelector('body')

setInterval(function(){
    gun = document.documentElement.scrollTop
    console.log(gun);

    if (gun > 300 && gun <= 1000) {
        nav_dig.className = 'animate__animated animate__fadeInUp'
    }
    if (gun > 350 && gun <= 1000) {
        main_left.classList.add('animate__animated')
        main_left.classList.add('animate__fadeInLeft')
        right.classList.add('animate__animated')
        right.classList.add('animate__fadeInRightBig')
    }
    if( gun > 800 && gun <= 2000){
        main_product.style.transform = 'scale(1)'
    }
    if( gun > 1450 && gun <= 2331){
        audio.classList.add('animate__animated')
        audio.classList.add('animate__fadeInLeft')
    }
    if( gun > 1800 && gun <= 2675 ){
        latest_bx.classList.add('animate__animated')
        latest_bx.classList.add('animate__fadeInRight')
    }
    if( gun > 2330 && gun <= 3032){
        adlsykj.classList.add('animate__animated')
        adlsykj.classList.add('animate__fadeInLeft')
        company.classList.add('animate__animated')
        company.classList.add('animate__fadeInRight')
        section_tit.classList.add('animate__animated')
        section_tit.classList.add('animate__fadeInUp')
        job.classList.add('animate__animated')
        job.classList.add('animate__fadeInRight')
    }
}, 10)

//                                                  监听
//  马卡龙
var bofang = document.querySelector('.bofang')

var mubu = document.querySelector('.mubu')
var bi = document.querySelector('.bi')
bofang.onclick = function(){
    mubu.style.display = 'block'
}
bi.onclick = function(){
    mubu.style.display = 'none'
}


//  马卡龙