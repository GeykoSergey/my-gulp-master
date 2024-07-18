console.log("Hello from Custom select");

// находим все оболочки кастомного селекта (див)
// каждый элемент forEach будет являться document.querySelectorAll('.dropdown') и
// мы его называем dropdownWrapper
// И далее поиск требуемых элементов ведется уже внутри конкретного dropdownWrapper

document.querySelectorAll(".dropdown").forEach(function (dropdownWrapper) {
  const dropDownButton = dropdownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropdownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropdownWrapper.querySelector(".visually-hidden");
  // const dropDownInputValue = dropdownWrapper.querySelector('.dropdown__list-item').dataset.value;
  console.log(dropDownInput.value);

  // при клике на кнопку
  dropDownButton.addEventListener("click", function () {
    // тоглим отображение списка
    dropDownList.classList.toggle("dropdown__list--visible");
    // и добавляем имитацию фокуса (типа аутлайн для кнопки)
    this.classList.add("dropdown__button--active");
  });

  // обходим все элементы списка и вешаем на каждый из них клик
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (event) {
      // Для того что бы при клике предотвратить передачу события по цепочке наверх
      // вплоть до документа
      event.stopPropagation();
      // здесь this это элемент списка
      // получаем значение текста элемента списка по которому кликнули (типа опшн) и
      // записываем это значение в кнопку (типа поле селект)
      dropDownButton.innerText = this.innerText;
      // находим инпут и записываем в него значение которое получили из дата атрибута
      // элемента списка
      dropdownWrapper.querySelector(".visually-hidden").value =
        this.dataset.value;
      console.log(dropDownInput.value);
      dropDownList.classList.remove("dropdown__list--visible");
    });
  });

  document.addEventListener("click", function (event) {
    // если кликаем не конкретно по этой кнопке (данных селектов может
    // быть несколько)
    if (event.target !== dropDownButton) {
      // убираем список и убираем обводку вокруг кнопки
      dropDownButton.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Tab" || event.key === "Escape") {
      dropDownButton.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});

// ========================================================================================

const selectElements = {
  button: document.querySelector('[role="combobox"]'),
  dropdown: document.querySelector('[role="listbox"]'),
};
console.log(selectElements.dropdown);

let isDropdownOpen = false;

const toggleDropdown = () => {
  selectElements.dropdown.classList.toggle('active');
  isDropdownOpen = !isDropdownOpen;
  selectElements.button.setAttribute('aria-expanded', isDropdownOpen.toString());
};

const handlePressKey = (event) => {
  event.preventDefault();
  const { key } = event;
  const openKeys = ['Enter', ' '];
  
  // if (openKeys.includes(key)) {
  //   toggleDropdown();
  // }
  debugger;

  if (!isDropdownOpen && openKeys.includes(key) || (isDropdownOpen) && key === 'Escape') {
    toggleDropdown();
  }

  console.log(event);
  console.log(event.key);
};

const handleDocumentInteraction = (event) => {
  const isClickInsideButton = selectElements.button.contains(event.target);
  const isClickInsideDropdown = selectElements.dropdown.contains(event.target);

  if (isClickInsideButton || (!isClickInsideDropdown && isDropdownOpen)){
    toggleDropdown();
  }
  console.log(isClickInsideButton);
  console.log(isClickInsideDropdown);

};

selectElements.button.addEventListener('keydown', handlePressKey);
// selectElements.button.addEventListener('click', toggleDropdown);
document.addEventListener('click', handleDocumentInteraction);