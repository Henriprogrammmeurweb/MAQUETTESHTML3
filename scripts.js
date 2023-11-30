let burger = document.querySelector('.burger');
let burger_span=document.querySelector('.burger span');
let menus=document.querySelector('.menus');


burger.addEventListener('click',function(){
    burger.classList.toggle('active');
    burger_span.classList.toggle('active');
    menus.classList.toggle('responsive');
});