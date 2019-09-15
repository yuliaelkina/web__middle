

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
  );
  

  
function accordeonTeam() {
const workers = document.querySelectorAll(".team__item");
const team = document.querySelector(".team__list");

team.addEventListener("click", function(event){
event.preventDefault();
const target = event.target;

if (target.classList.contains("team__item-name")) {
  const worker = target.parentNode;
  const content = target.nextElementSibling;
  const contentHeight = content.firstElementChild.clientHeight;

for (iterator of workers) {
  if (iterator !== worker) {
    iterator.classList.remove("team__item--active");
    iterator.lastElementChild.style.height = 0;
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
if (event.target.classList.contains('btn__read',)) {
  const title = event.target.parentNode.querySelector('.reviews__user-name').textContent;
  const text = event.target.parentNode.querySelector('.reviews__text').textContent;

  renderPopup(title,text);
}
else if (event.target.classList.contains('btn__more',)) {
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


function accordeonMenu() {
  const menuItems = document.querySelectorAll(".menu-page__item ");
  const menu = document.querySelector(".menu-page__list");
  
  menu.addEventListener("click", function(event){
  event.preventDefault();
  const target = event.target;
  
  if (target.classList.contains("menu-page__ttl")) {
    const menuItem = target.parentNode;
    const content = target.nextElementSibling;
    
  
  for (iterator of menuItems) {
    if (iterator !== menuItem) {
      iterator.classList.remove("menu-page__item--active");
      iterator.lastElementChild.style.width = 0;
    }
  }
  
  
  if (menuItem.classList.contains("menu-page__item--active")){
    menuItem.classList.remove("menu-page__item--active");
    content.style.width = 0;
  }
  else {menuItem.classList.add("menu-page__item--active");
  const screen = window.innerWidth;
  console.log(screen);
  if(screen > 768) {
  content.style.width = 540 + "px";}
  else {content.style.width = screen - 240 + "px";}
  }
  }
  });
  };
  
  accordeonMenu();


  function burgerSlider() {
    const slider = document.querySelector(".slider__list");
    
    document.querySelector(".slider__scroll-left").addEventListener ("click", elem =>
    {elem.preventDefault();
    loop ("left");
    });
    document.querySelector(".slider__scroll-right").addEventListener ("click", elem =>
    {elem.preventDefault();
    loop ("right");
    });  };
    
    function loop(direction) {const slider = document.querySelector(".slider__list");
      if(direction === "right") {slider.appendChild(slider.firstElementChild)}
      else {slider.insertBefore(slider.lastElementChild, slider.firstElementChild)}
      };
  
    
burgerSlider();


//
const sections = $(".page");
const display = $(".maincontent");
;
let inscroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countPosition = sectionEq => {
 return `${sectionEq * (-100)}%`;
}

const switchActiveClass = (elems, elemEq) => {
elems
.eq(elemEq)
.addClass("is-active")
.siblings()
.removeClass("is-active")
}

const performTransition = sectionEq => {
if(inscroll) return;
inscroll = true; 
const position = countPosition(sectionEq);

const switchMenuActiveClass = () => {
 switchActiveClass($(".pagination__item"), sectionEq); 
}

switchMenuActiveClass();
switchActiveClass(sections, sectionEq);



display.css({
  transform: `translateY(${position})`});
  setTimeout(()=>{
    inscroll = false;
  },1000 + 300);
};

const scrollViewport = direction =>{

  const activeSection = sections.filter('.is-active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if(direction === "next" && nextSection.length){performTransition(nextSection.index());}
  else if(direction === "prev" && prevSection.length){performTransition(prevSection.index());}
}

$(document).on('wheel', e=>{
  const deltaY = e.originalEvent.deltaY;

  if(deltaY > 0){
    scrollViewport("next");
  }
  if(deltaY < 0){
  
    scrollViewport("prev");
  }

});

$(document).on('keydown', e=>{
const tagName = e.target.tagName.toLowerCase();
const userTypingInInputs = tagName === 'input' || tagName === 'textarea';
if(userTypingInInputs) return;
 switch(e.keyCode) {
    case 38:
      scrollViewport("prev");
      break;
    case 40:
      scrollViewport("next");
      break;
  } 
});



$('[data-scroll-to]').on('click' , e=>{
e.preventDefault();
const target = $(e.currentTarget).attr("data-scroll-to");

performTransition(target);

});

if(isMobile){


$(function() {
  $(".wrapper").swipe( {
    swipe:function(event, direction) {
    
      event.preventDefault();
     let scrollDirection;
     
     if(direction === up){
      scrollDirection = "next";
     }
     else if(direction === down){
      scrollDirection = "prev";
     }

     scrollViewport(scrollDirection);
    }
  });
});
}
///
const myForm = document.querySelector(".form__elem");
const send = document.querySelector("#sendButton");
const successOverlay = createOverlay("Ваш заказ отправлен!");
const failOverlay = createOverlay("Что-то пошло не так, пожалуйста, попробуйте еще раз!");


send.addEventListener("click", e=>{
e.preventDefault();
const formData = new FormData(myForm);
formData.append("to", "test@mail.com");
formData.append("name", myForm.elements.name.value);
formData.append("name", myForm.elements.name.value);
formData.append("name", myForm.elements.name.value);

if (ValidateForm(myForm)) {
  console.log("форма ок");
const xhr = new XMLHttpRequest();

  xhr.open ('post', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData);
  xhr.responseType = "json";
  xhr.addEventListener("load", e=>{
    if(xhr.response.status < 200) {
      console.log("отправка ок");
     myForm.appendChild(successOverlay);
      myForm.reset();
      }
    
else {myForm.appendChild(failOverlay);
}
})
}
})



function ValidateForm (form) {
  let valid = true;
  if(!ValidateField(form.elements.name)) {
    valid = false;
  }
  else if(!ValidateField(form.elements.phone)) {
    valid = false;
  }
  else if(!ValidateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
 
}

function ValidateField(field) {
 field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}


function createOverlay(overlayText) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const contentElement = overlayElement.querySelector(".overlay__text");
  contentElement.innerHTML = overlayText;
  overlayElement.addEventListener("click", function(e) {
    if(e.target === overlayElement){
    myForm.removeChild(overlayElement)}});
 return overlayElement;
}

ymaps.ready(init);
var placemarks = [
  {
    latitude: 59.97,
    longitude: 30.31,
    hintContent: '<div class="map__hint"> ул. Литераторов, 19</div>',
    balloonContent: ['<div class="map__balloon">',
    '<svg class="logo__img"><use xlink:href="./images/sprite.svg#logo"></use></svg>',
    '<div class="map__text"><div class="map__title">Лучшие бургеры</div>ежедневно с 10:00 до 22:00<br> ул. Литераторов, 19</div>',
    '</div>']
  },
  {
    latitude: 59.94,
    longitude: 30.38,
    hintContent: '<div class="map__hint">Суворовский пр., 54</div>',
    balloonContent: ['<div class="map__balloon">',
    '<svg class="logo__img"><use xlink:href="./images/sprite.svg#logo"></use></svg>',
    '<div class="map__text"><div class="map__title">Лучшие бургеры</div>ежедневно с 10:00 до 21:00<br>Суворовский пр., 54</div>',
    '</div>']
  },
  {
    latitude: 59.89,
    longitude: 30.32,
    hintContent: '<div class="map__hint">Московский пр., 109</div>',
    balloonContent: ['<div class="map__balloon">',
    '<svg class="logo__img"><use xlink:href="./images/sprite.svg#logo"></use></svg>',
    '<div class="map__text"><div class="map__title">Лучшие бургеры</div>ежедневно с 10:00 до 22:00<br>Московский пр., 109</div>',
    '</div>']
  },
  {
    latitude: 59.91,
    longitude: 30.50,
    hintContent: '<div class="map__hint">ул. Дыбенко, 42</div>',
    balloonContent: ['<div class="map__balloon">',
    '<svg class="logo__img"><use xlink:href="./images/sprite.svg#logo"></use></svg>',
    '<div class="map__text"><div class="map__title">Лучшие бургеры</div>ежедневно с 10:00 до 21:00<br>ул. Дыбенко, 42</div>',
    '</div>']
  }
];
var geoObjects = [];
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.92, 30.35],
    zoom: 11,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

for(var i = 0; i < placemarks.length; i++) {
  geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
    hintContent: placemarks[i].hintContent,
    balloonContent: placemarks[i].balloonContent.join('')
  },
  { iconLayout: 'default#image',
   iconImageHref: './images/placemark.png',
   iconImageSize: [43, 57],
   iconImageOffset: [-22,-57]

  });

var clusterer = new ymaps.Clusterer({});
};

myMap.geoObjects.add(clusterer);
clusterer.add(geoObjects);
}


let video;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener('DOMContentLoaded', e=>{
video = document.getElementById('video');
video.addEventListener('click', playStop);

let playButtons = document.querySelectorAll('.play');
for (var i = 0; i<playButtons.length; i++) {
  playButtons[i].addEventListener('click', playStop);
}

let speakControl = document.querySelector('.sound__icon');
speakControl.addEventListener('click', soundOff);

durationControl = document.getElementById('durationLevel');
durationControl.addEventListener('mousedown', stopInterval);
durationControl.addEventListener('click', setVideoDuration);

durationControl.min = 0;
durationControl.value = 0;

soundControl = document.getElementById('volumeLevel');
soundControl.addEventListener('click', changeVolume);
soundControl.addEventListener('mouseup', changeVolume);

soundControl.min = 0;
soundControl.max = 10;
soundControl.value = soundControl.max;

});


function playStop() {
let playIcon = document.querySelector('.video__play-icon');
playIcon.classList.toggle('video__play-icon--active');

durationControl.max = video.duration;

if(video.paused) {
  video.play();
  intervalId = setInterval(updateDuration, 1000 /66);
}
else {
  video.pause();
  clearInterval(intervalId);
}
}

function updateDuration(){
  durationControl.value = video.currentTime;
}

function stopInterval(){
  video.pause();
  clearInterval(intervalId);
}

function setVideoDuration(){
  if(video.paused){
    video.play();
  }
  else{video.pause();}

  video.currentTime = durationControl.value;
  intervalId = setInterval(updateDuration, 1000 /66);
}

function changeVolume(){

  video.volume = soundControl.value/10;
}

function soundOff(){
if(video.volume === 0) {
  video.volume = soundLevel;
  soundControl.value = soundLevel*10;
}
else{
  soundLevel = video.volume;
  video.volume = 0;
  soundControl.value = 0;
}
}

//

