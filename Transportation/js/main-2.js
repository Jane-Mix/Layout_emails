$(function(){
  $('.geography__slider').slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: '<img class="arrow arrow-left" src="img/index-2/geography-arrow-left.webp" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="img/index-2/geography-arrow-right.webp" alt="">',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows : false,
          slidesToShow: 5,
          slidesToScroll: 5,
               }
      }]
  });
});

$(function(){
  $('.services__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img class="arrow arrow-left" src="img/index-2/services-arrow-left.webp" alt="" style="padding-right: 2%;">',
    nextArrow: '<img class="arrow arrow-right" src="img/index-2/services-arrow-right.webp" alt="" style="padding-left: 2%;">',
    responsive: [
      {
          breakpoint: 605,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
                 }
        }],  
  });
});

const menuBtn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav__list');

  menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav__list--active')
});

const dropdownBtn = document.querySelector('.header__dropdown-btn');

dropdownBtn.addEventListener('click', () => {
  dropdownBtn.classList.toggle('header__dropdown-btn--active')
});

const request = document.querySelector('.request__form-btn');

request.addEventListener('click', () => {
  request.classList.toggle('request__form-btn--active')
});

