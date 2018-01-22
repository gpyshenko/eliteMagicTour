import '../styles/bundle.css';
import 'wallop/css/wallop.css'
import 'wallop/css/wallop--fade.css'

import Wallop from 'wallop';
let wallopEl = document.querySelector('.Wallop');
let wallop = new Wallop(wallopEl);
setInterval(function() {
    wallop.next();
}, 4000);

let paginationDots = Array.prototype.slice.call(document.querySelectorAll('.banner-dot'));

paginationDots.forEach(function (dotEl, index) {
    dotEl.addEventListener('click', function() {
        wallop.goTo(index);
    });
});

wallop.on('change', function(event) {
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




