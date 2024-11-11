import '../../src/scss/style.scss'

$('.bg__slider-info').slick({
    infinite: true,
    speed: 2000,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: true,
    draggable: false,
    zIndex: 10
});

