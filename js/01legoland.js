var swiper = new Swiper(".attrantion", {
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    slidesPerView: 4.5,
    spaceBetween: 30,
    centeredSlides: true,


    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },

      360: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 50,
        centeredSlides: true,
      },
    },

  });

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
