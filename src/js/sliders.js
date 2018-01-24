export function sliders(Wallop) {
    // Инициализация баннера
    let banner = document.querySelector('.banner');
    let sliderBanner = new Wallop(banner);
    let bannerDots = Array.prototype.slice.call(document.querySelectorAll('.banner-dot'));
    listener(sliderBanner, bannerDots, 4000, '.banner');

    // Инициализация галереи
    let gallery = document.querySelector('.gallery');
    let sliderGallery = new Wallop(gallery);
    let galleryDots = Array.prototype.slice.call(document.querySelectorAll('.gallery-dot'));
    listener(sliderGallery, galleryDots, 4000, '.gallery');

    let reviews = document.querySelector('.reviews-slider');
    let sliderReviews = new Wallop(reviews);
    let reviewsDots = Array.prototype.slice.call(document.querySelectorAll('.reviews-dot'));
    listener(sliderReviews, reviewsDots, 4000, '.reviews');

    // Функция настройки слайдеров
    function listener(slider, dots, duration, selector) {
        dots.forEach(function (dotEl, index) {
            dotEl.addEventListener('click', function() {
                slider.goTo(index);
            });
        });
        slider.on('change', function(event) {
            removeClass(document.querySelector(selector + ' .current'), 'current');
            addClass(dots[event.detail.currentItemIndex], 'current');
        });
        setInterval(function() {
            slider.next();
        }, duration);
    }
    // Функции замена классов
    function addClass(element, className) {
        if (!element) { return; }
        element.classList.add(className);
    }

    function removeClass(element, className) {
        if (!element) { return; }
        element.classList.remove(className);
    }
}
export default {
    sliders
}