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

$('.sleep__content').slick({
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});

window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const columnsWrapper = event.target.closest('.sleep__columns-item');

        counter = columnsWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        } else if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }
        }
        const nightWrapper = columnsWrapper.closest('.sleep__image').querySelector('.sleep__columns-item:nth-child(2)');
        const guestWrapper = columnsWrapper.closest('.sleep__image').querySelector('.sleep__columns-item:nth-child(3)');

        const nights = nightWrapper.querySelector('.items__nights-current');
        const guests = guestWrapper.querySelector('.items__guests-current');
        const fullPrice = columnsWrapper.closest('.sleep__image').querySelector('[data-counter--full]');
        if (nights && guests && fullPrice) {
            const totalPrice = (parseInt(nights.innerText) * 65) + (parseInt(guests.innerText) * 35);
            fullPrice.innerText = totalPrice;
        }
    }
});

$('.shop__content').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

});


document.querySelectorAll('.header__list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const travelPlane = document.querySelector('.travel__plane');
    window.addEventListener('scroll', () => {
        let topScroll = window.scrollY
        if (topScroll >= 3250) {
            travelPlane.classList.add('plane-animation')
        }
    })
});




