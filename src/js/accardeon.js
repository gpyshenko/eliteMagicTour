export function accardeon() {
    let accHead = document.querySelectorAll(".nav-item"); // Заголовок аккордеона
    let accActive = document.getElementsByClassName("active"); // Класс при клике
    const classActive = 'active';
    Array.from(accHead).forEach(function(item, i, accHead) {
        item.addEventListener('click', function(e) {
            if (accActive.length > 0 && accActive[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
                accActive[0].classList.remove(classActive); // убрать класс

            // изменить состояние класса acc-head на текущем элементе: добавить если не было, убрать если было.
            this.classList.toggle(classActive);
        });
    });
}

export default {
    accardeon
}
