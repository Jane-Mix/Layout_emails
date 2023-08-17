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