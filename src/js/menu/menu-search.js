export function toggleSearch() {
    let searchBtn = document.querySelector('.search-btn');
    let searchWrapepr = document.querySelector('.search');
    let searchInput = document.querySelector('.search-input');
    const activeClass = 'active';

    searchBtn.addEventListener('click', function () {
        this.classList.toggle(activeClass);
        searchWrapepr.classList.toggle(activeClass);
        searchInput.classList.toggle(activeClass);
    })
}
export default {
    toggleSearch
}