import $ from 'jquery';

$(document).ready(() => {
  $('.header__menu-button').on('click', () => {
    $('.header__menu-button').toggleClass('header__menu-button--active');
    $('.root').toggleClass('root--lock');
    $('.header').toggleClass('header--colored');
    $('.navigation').fadeToggle().css('display', 'flex');
  });
});
