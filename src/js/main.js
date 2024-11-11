import '../../src/scss/style.scss'

// $('.bg__slider-info').on('init', function(event, slick){
//     let firstImg = $('.bg__slider-info img').eq(0); 
//     let initialText = firstImg.data('text'); 
//     $('.slider__text-content').text(initialText).fadeIn(500); 
// });

// $('.bg__slider-info').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     let nextImg = $('.bg__slider-info img').eq(nextSlide);
//     let nextText = nextImg.data('text');
    
//     $('.slider__text-content').fadeOut(500, function() {
//         $(this).text(nextText).fadeIn(300);
//     });
// });

// Настройка Slick Slider
$('.bg__slider-info').slick({
    infinite: true,
    speed: 2000,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: true,
    draggable: false,
    zIndex: 10
});

