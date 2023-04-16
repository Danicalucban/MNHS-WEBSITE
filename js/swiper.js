const swiper = new Swiper(".facilities-carousel", {
  slidesPerView: 1,
  spaceBetween: 23,
  speed: 800,

  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".carousel-wrapper__btn-next",
    prevEl: ".carousel-wrapper__btn-prev",
  },
});
