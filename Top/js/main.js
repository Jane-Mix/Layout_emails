$(function(){
  $('.main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="images/left-arrow.png" style="padding-right: 46px;padding-bottom: 140px;" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="images/right-arrow.png" style="padding-bottom: 140px;" alt="">',
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
});

const searchMenu = document.querySelector('.menu__search-btn');

searchMenu.addEventListener('click', () => {
  searchMenu.classList.toggle('menu__search-btn--active')
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active')
});