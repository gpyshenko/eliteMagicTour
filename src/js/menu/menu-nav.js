export function navMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
    })
}
export default {
    navMenu
}