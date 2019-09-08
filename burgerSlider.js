function burgerSlider() {
  const slider = document.querySelector(".slider__list");
  document.querySelector(".slider__scroll-left").addEventListener("click", e => {
    e.preventDefault();
    loop(left);
  });
  document.querySelector(".slider__scroll-right").addEventListener("click", e => {
    e.preventDefault();
    loop(right);
  });
  function loop(direction) {
    if (direction === 'right') {
      slider.appendChild(firstElementChild);
    }
    else {
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    }
  }
}
