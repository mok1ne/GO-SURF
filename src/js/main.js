import '../../src/scss/style.scss'

function clockTick() {
    let currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear()
    const dayElement = document.querySelector('.header__info h2');
    const dateAndYearElement = document.querySelector('.header__info h6');

    dayElement.textContent = day;

    dateAndYearElement.textContent = `${month} | ${year}`;
}

clockTick();


$('.bg__slider-info').slick({
    infinite: true,
    speed: 1000,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    customPaging: function (slider, i) {
        const dotNumber = (i + 1).toString().padStart(2, '0');
        const dotNames = ['North Shore', 'South Shore', 'West Shore', 'East Shore'];
        const dotName = dotNames[i];
        return `<div class="dots__slider"><h3>${dotNumber}</h3><h4>${dotName}</h4></div>`;
    },
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: true,
    draggable: false,
    zIndex: 10
});


$('.travel__content').slick({
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});


document.querySelector ('.slick-next')







