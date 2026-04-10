var main_bx = document.querySelector('.main_bx')
var ul5 = main_bx.querySelectorAll('ul')
var paging = document.querySelector('.paging')
var span5 = paging.querySelectorAll('span')
var up = document.querySelector('.up')
var down = document.querySelector('.down')
for (i = 1; i < ul5.length; i++) {
    ul5[i].style.display = 'none'
}


for (let j = 0; j < span5.length; j++) {
    span5[j].onclick = function () {
        for (n = 0; n < span5.length; n++) {
            ul5[n].style.display = 'none'
            span5[n].style.background = ''
            span5[n].style.color = '#333333'
        }
        ul5[j].style.display = 'block'
        span5[j].style.background = '#7fcc27'
        span5[j].style.color = 'white'
    }
    // down.onclick = function(){
    //     j += 1
    //     ul5[j].style.display = 'block'
    // }
}