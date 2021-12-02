var open = document.querySelector('.hamburger')
var close = document.querySelector('.close')
var menu = document.querySelector('.menu')

open.addEventListener('click', function(){
    menu.classList.add('showmenu')
})

close.addEventListener('click', function(){
    menu.classList.remove('showmenu')
})