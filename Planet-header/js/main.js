const selectLang = document.querySelector('.select__lang');

selectLang.addEventListener('click', () => {
  selectLang.classList.toggle('select__lang--active')
});

const selectCurr = document.querySelector('.select__currency');

selectCurr.addEventListener('click', () => {
  selectCurr.classList.toggle('select__currency--active')
});

const dropdownBtn = document.querySelector('.dropdown__btn');

dropdownBtn.addEventListener('click', () => {
  dropdownBtn.classList.toggle('dropdown__btn--active')
});

const seachHead = document.querySelector('.header__seach');

seachHead.addEventListener('click', () => {
  seachHead.classList.toggle('header__seach--active')
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active')
});