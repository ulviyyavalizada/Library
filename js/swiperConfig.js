// Index landing swiper
var swiperIndex = new Swiper("main.index .index_landing_swiper .swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 23,
  loop: true,
  speed: 700,
  grabCursor: true,
  
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    0: {
      navigation: false,
      pagination: {
        el: '.index_landing_swiper .swiper-pagination',
        type: 'bullets',
      },
      
    },
    991: {
      navigation: {
        nextEl: ".index_landing_swiper .swiper-button-next",
        prevEl: ".index_landing_swiper .swiper-button-prev",
      },
      pagination: false
    }
  }
});

// searched items swiper
var swiperSearchItems = new Swiper(".searched_items.swiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  grabCursor: true,
  speed: 800,
});

// Latest articles swiper in articles page
var swiperArticles = new Swiper("main.articles .latest_articles .swiper", {
  spaceBetween: 20,
  grabCursor: true,
  speed: 800,
  navigation: {
    nextEl: "main.articles  .latest_articles .swiper-button-next",
    prevEl: "main.articles  .latest_articles .swiper-button-prev",
  },
  pagination: {
    el: 'main.articles  .latest_articles .swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 2,
    },
    414: {
      slidesPerView: 1.7,
    },
    480: {
      slidesPerView: 2.2,
    },
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 11,
    },
    1750: {
      slidesPerView: 3,
      spaceBetween: 18,
    }
  }
});


if($(window).width()<576){
  
  // Latest articles swiper in mobile
  var swiperIndex = new Swiper("main.index .latest_articles .swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    grabCursor: true,
    speed: 800,
    navigation: false,
    pagination: {
      el: '.latest_articles .swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 2,
      },
      414: {
        slidesPerView: 1.7,
      },
      480: {
        slidesPerView: 2.2,
      },
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 11,
      }
    }
  });

  
  // Library swiper in library page
  var swiperLibrary = new Swiper("main.library .swiper", {
    slidesPerView: 1.6,
    spaceBetween: 30,
    grabCursor: true,
    speed: 800,
    navigation: false,
    pagination: {
      el: 'main.library .middle_box .swiper-pagination',
      type: 'bullets',
    },
   
    
  });
}

if($(window).width()<992){

  // Latest articles swiper in Article Inner Page
  var swiperArticles = new Swiper("main.article_inner .latest_articles .swiper", {
    spaceBetween: 20,
    grabCursor: true,
    speed: 800,
    navigation: false,
    pagination: {
      el: 'main.article_inner  .latest_articles .swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 2,
      },
      414: {
        slidesPerView: 1.7,
      },
      480: {
        slidesPerView: 2.2,
      },
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 11,
      },
      1750: {
        slidesPerView: 3,
        spaceBetween: 18,
      }
    }
  });

  // Latest articles swiper in Jurnal About Page
  var swiperIndex = new Swiper("main.journalAbout .latest_articles .swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    grabCursor: true,
    speed: 800,
    navigation: false,
    pagination: {
      el: '.latest_articles .swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 2,
      },
      414: {
        slidesPerView: 1.7,
      },
      480: {
        slidesPerView: 2.2,
      },
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 11,
      }
    }
  });

}



