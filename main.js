
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let items = document.querySelectorAll('.menu__item');
let burger = document.querySelector('.hamb-menu__button');
let close = document.querySelector('.hamb-menu__close');



function toggleMenu(){
  menu.classList.toggle('menu--hamb');
  body.classList.toggle('body--active-menu');
}
items.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})
burger.addEventListener('click' , toggleMenu);
close.addEventListener('click' , toggleMenu);