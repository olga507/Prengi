new Swiper('.swiper-container-promo', {
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next-promo',
        prevEl: '.swiper-button-prev-promo'
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    speed: 1300,
    spaceBetween: 10,
    breakpoints: {
        992: {
            speed: 2000,
            spaceBetween: 30,
        }
    }
});

new Swiper('.swiper-container-solutions', {
    loop: true,
    speed: 1000,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next-solutions',
        prevEl: '.swiper-button-prev-solutions'
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    effect: 'cube',
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});