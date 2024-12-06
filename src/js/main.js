import '../../src/scss/style.scss'

const burgerMenu = document.querySelector('.burger__menu')
const burgerMenuStyle = document.querySelector('.burger__menu-style')

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    burgerMenuStyle.classList.toggle('active')
    if (burgerMenu.classList.contains('active')) {
        burgerMenu.style.position = 'fixed'
    } else {
        burgerMenu.style.position = 'relative'
    }
})


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

$('.about__info').slick({
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1558,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },



    ]
});


document.querySelectorAll('a').forEach(link => {
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
    const upArrows = document.querySelector('.up-arrows')
    const surfTitle = document.querySelector('.surf__title')
    const surfDescription = document.querySelector('.surf__description')
    const surfPoint = document.querySelectorAll('.surf__point')
    const beachImage2 = document.querySelector('.about__image--2')
    const beachImage4 = document.querySelector('.about__image--4')
    const travelTitle = document.querySelector('.travel__title')
    const travelDescription = document.querySelectorAll('.travel__description')
    const travelPlane = document.querySelector('.travel__plane');
    const travelImageDescription = document.querySelectorAll('.travel__image-description')
    const travelButton = document.querySelector('.travel__button')
    const sleepImageDescription = document.querySelectorAll('.sleep__image-description')
    const travelColumnItem = document.querySelectorAll('.travel__columns-item')
    const sleepTitle = document.querySelector('.sleep__title')
    const sleepDescription = document.querySelectorAll('.sleep__description')
    const sleepItemColumns = document.querySelectorAll('.sleep__columns-item')
    const sleepButton = document.querySelector('.sleep__button')
    const shopTitle = document.querySelector('.shop__title')
    const shopImageItem = document.querySelectorAll('.shop__image-item')
    const shopImageImg = document.querySelectorAll('.shop__image-img')
    const shopImageInner = document.querySelectorAll('.shop__image-inner')
    const footer = document.querySelector('.footer')
    let isScrolling;
    window.addEventListener('scroll', () => {
        let topScroll = window.scrollY
        if (topScroll >= 600) {
            upArrows.classList.add('animation-opacity')

        } else {
            upArrows.classList.remove('animation-opacity')
        }
        upArrows.classList.add('opacity-arrows');
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            upArrows.classList.remove('opacity-arrows');
        }, 600);

        if (topScroll >= 500) {
            surfTitle.classList.add('animation-in-side')
        }

        if (topScroll >= 550) {
            surfDescription.classList.add('animation-in-side')
        }

        if (topScroll >= 930) {
            for (const point of surfPoint) {
                point.classList.add('animation-in-bottom')
            }
        }

        if (topScroll >= 1600) {
            beachImage2.classList.add('animation-in-bottom')
            beachImage4.classList.add('animation-in-bottom')
        }

        if (topScroll >= 2550) {
            travelTitle.classList.add('animation-in-side')
        }

        if (topScroll >= 2860) {
            for (const travelDesc of travelDescription) {
                travelDesc.classList.add('animation-in-side')
            }
        }

        if (topScroll >= 3580) {
            travelPlane.classList.add('plane-animation')
        }

        if (topScroll >= 3700) {
            for (const travelImageDesc of travelImageDescription) {
                travelImageDesc.classList.add('animation-in-bottom')
            }
        }
        if (topScroll >= 3950) {
            for (const travelColumnItm of travelColumnItem) {
                travelColumnItm.classList.add('animation-in-bottom')
            }
        }

        if (topScroll >= 4450) {
            travelButton.classList.add('animation-opacity')
        }

        if (topScroll >= 4800) {
            sleepTitle.classList.add('animation-in-side')
        }

        if (topScroll >= 4900) {
            for (const sleepDesc of sleepDescription) {
                sleepDesc.classList.add('animation-in-side')
            }
        }

        if (topScroll >= 5800) {
            for (const sleepImageDesc of sleepImageDescription) {
                sleepImageDesc.classList.add('animation-in-side')
            }
        }
        if (topScroll >= 5950) {
            for (const sleepitemColm of sleepItemColumns) {
                sleepitemColm.classList.add('animation-in-side')
            }
        }

        if (topScroll >= 6450) {
            sleepButton.classList.add('animation-opacity')
        }

        if (topScroll >= 6720) {
            shopTitle.classList.add('animation-in-side')
        }

        if (topScroll >= 7100) {
            for (const shopImageItm of shopImageItem) {
                shopImageItm.classList.add('animation-in-bottom')
            }
            for (const shopImg of shopImageImg) {
                shopImg.classList.add('animation-in-bottom')
            }
        }
        if (topScroll >= 7200) {
            for (const shopImageInr of shopImageInner) {
                shopImageInr.classList.add('animation-in-bottom')
            }
        }


        if (topScroll >= 7600) {
            footer.classList.add('animation-in-bottom')
        }
    })
});
