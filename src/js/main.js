import '../styles/bundle.css';
import 'wallop/css/wallop.css'
import 'wallop/css/wallop--fade.css'
import 'wallop/css/wallop--slide.css'

import 'pikaday/css/pikaday.css'
// Импорт слайдера
import Wallop from 'wallop';
// Импорт скриптов слайдеров на сайте
import slider from './sliders';
slider.sliders(Wallop);

import menuSearch from './menu/menu-search';
menuSearch.toggleSearch();

import menuNav from './menu/menu-nav';
menuNav.navMenu();

import acc from './accardeon';
acc.accardeon();

import Pikaday from 'pikaday'
let inputPicker = document.querySelectorAll('.datepicker');
[].forEach.call(inputPicker, function (e) {
    let picker = new Pikaday({
        field: e,
        position: 'bottom right',

    });
    window.addEventListener("resize", function () {
        picker.hide()
    });
});










