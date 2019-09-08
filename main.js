
let menu = document.querySelector('.menu--hamb');
let body = document.querySelector('body');
let items = document.querySelectorAll('.menu__item--hamb');
let burger = document.querySelector('.hamb-menu__button');
let close = document.querySelector('.hamb-menu__close');

function openMenu(){
  menu.style.opacity = '1';
  menu.style.left = '0%';
  body.classList.add('body--active-menu');
}

function closeMenu(){
  menu.style.opacity = '0';
  menu.style.left = '130%';
  body.classList.remove('body--active-menu');
}

burger.addEventListener('click' , function(e){
  e.preventDefault();
  openMenu();
});

close.addEventListener('click' , function(e){
  e.preventDefault(); 
  closeMenu();
});


items.forEach(function(element){
  element.addEventListener('click' , closeMenu)}
  )



function accordeonTeam() {
const workers = document.querySelectorAll(".team__item");
const team = document.querySelector(".team__list");

team.addEventListener("click", function(event){
event.preventDefault();
const target = event.target;

if (target.classList.contains("team__item-name")) {
  const worker = target.parentNode;
  const content = target.nextElementSibling;
  const contentHeght = content.firstElementChild.clientHeight;

for (iterator of workers) {
  if (iterator !== worker) {
    iterator.classList.remove("team__item--active");
    iterator.firstElementChild.style.height = 0;
  }
}


if (worker.classList.contains("team__item--active")){
  worker.classList.remove("team__item--active");
  content.style.height = 0;
}
else {worker.classList.add("team__item--active");
content.style.height = contentHeight + "px";
}
}
});
}

accordeonTeam();


function popupReview() {
  const reviewList = document.querySelector('.reviews__list');
  reviewList.addEventListener("click" , function(event) {
event.preventDefault();
if (event.target.classList.contains('btn__read')) {
  const title = event.target.parentNode.querySelector('.reviews__user-name').textContent;
  const text = event.target.parentNode.querySelector('.reviews__text').textContent;

  renderPopup(title,text);
}
})
function renderPopup(title,text) {
  const popup = document.querySelector('.popup');
  popup.classList.add('popup--active');
  popup.querySelector('.popup__title').textContent = title;
  popup.querySelector('.popup__text').textContent = text;

  popup.querySelector('.popup__close').addEventListener ("click", e=>{
    e.preventDefault();
    popup.classList.remove('popup--active');
  })
}

}

popupReview();
