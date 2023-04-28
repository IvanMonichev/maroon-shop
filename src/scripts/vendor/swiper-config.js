import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper', {
  init: true,
  loop: true,
  navigation: {
    nextEl: `.slider__button--next`,
    prevEl: `.slider__button--prev`,
  },
  slidesPerView: 1,
  spaceBetween: 30,
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


console.log('The Swiper is working.');
