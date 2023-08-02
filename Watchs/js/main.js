const searchBtn = document.querySelector('.header-control__btn');

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('header-control__btn--active')
});

const userBtn = document.querySelector('.header-control__user-btn');

userBtn.addEventListener('click', () => {
  userBtn.classList.toggle('header-control__user-btn--active')
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--active')
});

const swiper = new Swiper('.slider__swiper', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".slider__swiper-pagination",
    clickable: true,
  },
});

const newSwiper = new Swiper('.about__swiper', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const colectionSwiper = new Swiper('.colection__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 65,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints: {
      315: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 2,
      },
    },  
});

const tabItem = document.querySelectorAll('.colection__btn-item');
const tabContent = document.querySelectorAll('.colection__content-item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;


  tabItem.forEach(function(item) {
    item.classList.remove('colection__btn-item--active');
  });

  tabTarget.classList.add('colection__btn-item--active');

  tabContent.forEach(function(item) {
    item.classList.remove('colection__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('colection__content-item--active');
};

const customSwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 164,
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    315: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1000: {
      spaceBetween: 75,
    },
  },  
});