let searchBtn = document.querySelector('.search-bar__icon');
let searchPanel = document.querySelector('.search-bar__body');
let searchClearBtn = document.querySelector('.search-bar__clear');
let searchInput = document.querySelector('.search-bar__input');

let openSearchForm = () => {
  searchBtn.addEventListener('click', function () {
    searchPanel.classList.toggle('search-bar--open');
  });
};

let clearSearchForm = () => {
  searchClearBtn.addEventListener('click', function () {
    searchInput.value = '';
  });
}

openSearchForm();
clearSearchForm();

