import $ from 'jquery';
import './vendor/swiper-config.js';

$(document).ready(() => {

  // Burger menu
  $('.header__menu-button').on('click', () => {
    $('.header__menu-button').toggleClass('header__menu-button--active');
    $('.root').toggleClass('root--lock');
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

console.log('The application is working.');
console.log(`Ivan Monichev © ${new Date().getFullYear()} — https://github.com/IvanMonichev`);
