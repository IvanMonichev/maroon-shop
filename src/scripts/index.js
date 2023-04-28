import $ from 'jquery';
import Swiper from 'swiper';
// import './vendor/swiper-config.js';


const mySwiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: `.slider__button--next`,
    prevEl: `.slider__button--prev`,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  updateOnWindowResize: true,
  grabCursor: true,
  breakpoints: {
    320: {
      width: 970
    },
    768: {
      width: 1010
    }
  }
})

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
