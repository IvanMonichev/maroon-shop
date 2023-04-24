import $ from 'jquery';

$(document).ready(() => {

  // Burger menu
  $('.header__menu-button').on('click', () => {
    $('.header__menu-button').toggleClass('header__menu-button--active');
    $('.root').toggleClass('root--lock');
    $('.header').toggleClass('header--colored');
    $('.navigation').fadeToggle().css('display', 'flex');
  });

  // Scroll header

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('header--colored');
    } else {
      $('.header').removeClass('header--colored');
    }
  })
});
