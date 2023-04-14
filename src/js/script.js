const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // loop: true,
    speed: 700,
    spaceBetween: 10,
    breakpoints: {
        530: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        830: {
            slidesPerView: 2,
            spaceBetween: 39,
        }
    },
    pagination: {
        el: '.pagination',
        clickable:true
    },
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    // autoplay: {
    //     delay: 2000
    // }


});