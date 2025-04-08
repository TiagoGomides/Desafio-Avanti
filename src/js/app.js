var swiper = new Swiper(".swiper", {
  loop:true,
  grabCursor:true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
     
      640: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      1188: {
        slidesPerView: 5,
        spaceBetween: 24
      }
    }
  
});