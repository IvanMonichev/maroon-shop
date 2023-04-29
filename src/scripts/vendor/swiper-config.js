import Swiper, { Navigation } from 'swiper';

const slider = document.querySelector(`.swiper`);

if (slider) {
  const mySwiper = new Swiper('.swiper', {
    modules: [Navigation],
    init: false,
    loop: true,
    navigation: {
      nextEl: `.slider__button--next`,
      prevEl: `.slider__button--prev`,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    updateOnWindowResize: true,
    breakpoints: {
      320: {
        width: 970
      },
      768: {
        width: 1010
      }
    }
  })

  mySwiper.init();
}


console.log('The Swiper is working.');
