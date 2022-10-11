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