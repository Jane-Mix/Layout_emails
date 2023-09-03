const contBtn = document.querySelector('.top__info-cont-btn');

contBtn.addEventListener('click', ()=> {
  contBtn.classList.toggle('top__info-cont-btn--active')
});

const authBtn = document.querySelector('.top__info-auth-btn');

authBtn.addEventListener('click', ()=> {
  authBtn.classList.toggle('top__info-auth-btn--active')
});

const inBtn = document.querySelector('.header-main__person-in-btn');

inBtn.addEventListener('click', ()=> {
  inBtn.classList.toggle('header-main__person-in-btn--active')
});

const menuBtn = document.querySelector('.menu__nav-item-cont-btn');

menuBtn.addEventListener('click', ()=> {
  menuBtn.classList.toggle('menu__nav-item-cont-btn--active')
});

const dropBtn = document.querySelector('.menu__nav-item-btn');

dropBtn.addEventListener('click', ()=> {
  dropBtn.classList.toggle('menu__nav-item-btn--active')
});

const navBtn = document.querySelector('.menu__nav-btn');
const navList = document.querySelector('.menu__nav-list');

navBtn.addEventListener('click', () => {
  navList.classList.toggle('menu__nav-list--active')
});

const mainSwiper = new Swiper(".main-slider__swiper", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 1,
  pagination: {
    el: ".main-slider__swiper-pagination",
    clickable: true,
  },
});

const profSwiper = new Swiper(".profitable__swiper", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    315: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },  
});

const popularSwiper = new Swiper(".popular__swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".popular__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    315: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1750: {
      slidesPerView: 4,
    },
  },  
});

const catalogFilterDrop = document.querySelector('.catalog__filter-btn');

catalogFilterDrop.addEventListener('click', ()=> {
  catalogFilterDrop.classList.toggle('catalog__filter-btn--active')
});

const catalogBtn = document.querySelector('.catalog__btn');
const catalogList = document.querySelector('.catalog__menu');

catalogBtn.addEventListener('click', () => {
  catalogList.classList.toggle('catalog__menu--active')
});




