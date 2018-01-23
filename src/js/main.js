import '../styles/bundle.css';
import 'wallop/css/wallop.css'
import 'wallop/css/wallop--fade.css'

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




