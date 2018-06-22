export function sliders(Wallop) {
    // Функции замена классов
    function addClass(element, className) {
        if (!element) { return; }
        element.classList.add(className);
    }

    function removeClass(element, className) {
        if (!element) { return; }
        element.classList.remove(className);
    }
    // Функция настройки слайдеров
    function sliderInit(selector) {
        let sliderSelector = selector;
        let slider = document.querySelector(sliderSelector);
        if(slider) {
            slider.classList.add('Wallop');
            let isSlider = new Wallop(slider);
            let sliderDots = document.querySelectorAll(selector + '-dot')
            sliderDots.forEach(function (dotEl, index) {
                dotEl.addEventListener('click', function () {
                    isSlider.goTo(index);
                });
            });
            isSlider.on('change', function (event) {
                removeClass(document.querySelector(selector + ' .current'), 'current');
                addClass(sliderDots[event.detail.currentItemIndex], 'current');
            });
            // setInterval(function () {
            //     slider.next();
            // }, duration);
        }
    }

    // Инициализация баннера

    sliderInit('.banner');
    //sliderInit('.gallery');
    //sliderInit('.reviews');
}
export default {
    sliders
}