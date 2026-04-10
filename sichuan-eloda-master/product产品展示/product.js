var pic3 = document.querySelector('.pic3')
var ul = pic3.querySelector('ul')

var dong = [-1200, -2400, -3600]
var i = 0


var jishi = setInterval(function () {

    ul.style.transition = "all 1s"
    ul.style.transform = 'translateX(' + dong[i] + 'px)'
    i++
    console.log(i);
    if (i == 3) {
        setTimeout(function () {
            ul.style.transition = "all 0s"
            ul.style.transform = 'translateX(0px)'
            i = 0;
        }, 1100)
    }
}, 2000)
