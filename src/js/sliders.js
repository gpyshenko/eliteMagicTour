export function sliders(Wallop) {
    // Инициализация баннера
    let banner = document.querySelector('.banner');
    let sliderBanner = new Wallop(banner);
    setInterval(function() {
        sliderBanner.next();
    }, 4000);

    let paginationDots = Array.prototype.slice.call(document.querySelectorAll('.banner-dot'));

    paginationDots.forEach(function (dotEl, index) {
        dotEl.addEventListener('click', function() {
            sliderBanner.goTo(index);
        });
    });

    sliderBanner.on('change', function(event) {
        removeClass(document.querySelector('.banner-dot-current'), 'banner-dot-current');
        addClass(paginationDots[event.detail.currentItemIndex], 'banner-dot-current');
    });

    function addClass(element, className) {
        if (!element) { return; }
        element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }

    function removeClass(element, className) {
        if (!element) { return; }
        element.className = element.className.replace(className, '');
    }
}
export default {
    sliders
}