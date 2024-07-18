/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ex.js */ "./src/js/components/ex.js");
/* harmony import */ var _components_combobox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/combobox.js */ "./src/js/components/combobox.js");
console.log("components");

// ========================================================
//                         CONTROL
// ========================================================



/***/ }),

/***/ "./src/js/components/combobox.js":
/*!***************************************!*\
  !*** ./src/js/components/combobox.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const elements = {
  combobox: document.querySelector("[data-combobox]"),
  button: document.querySelector('[role="combobox"]'),
  dropdown: document.querySelector('[role="listbox"]'),
  options: document.querySelectorAll('[role="option"]') // add the options elements
};
let isDropdownOpen = false;
let currentOptionIndex = 0;
let lastTypedChar = "";
let lastMatchingIndex = 0;
const toggleDropdown = () => {
  elements.dropdown.classList.toggle("active");
  elements.combobox.classList.toggle("open");
  isDropdownOpen = !isDropdownOpen;
  elements.button.setAttribute("aria-expanded", isDropdownOpen.toString());
  if (isDropdownOpen) {
    focusCurrentOption();
  } else {
    elements.button.focus(); // focus the button when the dropdown is closed just like the select element
  }
};
const focusCurrentOption = () => {
  const currentOption = elements.options[currentOptionIndex];
  currentOption.classList.add("current");
  currentOption.focus();
  currentOption.scrollIntoView({
    block: "nearest"
  });
  elements.options.forEach((option, index) => {
    if (option !== currentOption) {
      option.classList.remove("current");
    }
  });
};
const handleKeyPress = event => {
  event.preventDefault();
  const {
    key
  } = event;
  const openKeys = ["ArrowDown", "ArrowUp", "Enter", " "];
  if (!isDropdownOpen && openKeys.includes(key)) {
    toggleDropdown();
  } else if (isDropdownOpen) {
    switch (key) {
      case "Escape":
        toggleDropdown();
        break;
      case "ArrowDown":
        moveFocusDown();
        break;
      case "ArrowUp":
        moveFocusUp();
        break;
      case "Enter":
      case " ":
        selectCurrentOption();
        break;
      default:
        // Handle alphanumeric key presses for mini-search
        handleAlphanumericKeyPress(key);
        break;
    }
  }
};
const handleDocumentInteraction = event => {
  const isClickInsideButton = elements.button.contains(event.target);
  const isClickInsideDropdown = elements.dropdown.contains(event.target);
  if (isClickInsideButton || !isClickInsideDropdown && isDropdownOpen) {
    toggleDropdown();
  }

  // Check if the click is on an option
  const clickedOption = event.target.closest('[role="option"]');
  if (clickedOption) {
    selectOptionByElement(clickedOption);
  }
};
const moveFocusDown = () => {
  if (currentOptionIndex < elements.options.length - 1) {
    currentOptionIndex++;
  } else {
    currentOptionIndex = 0;
  }
  focusCurrentOption();
};
const moveFocusUp = () => {
  if (currentOptionIndex > 0) {
    currentOptionIndex--;
  } else {
    currentOptionIndex = elements.options.length - 1;
  }
  focusCurrentOption();
};
const selectCurrentOption = () => {
  const selectedOption = elements.options[currentOptionIndex];
  selectOptionByElement(selectedOption);
};
const selectOptionByElement = optionElement => {
  const optionValue = optionElement.textContent;
  elements.button.textContent = optionValue;
  elements.options.forEach(option => {
    option.classList.remove("active");
    option.setAttribute("aria-selected", "false");
  });
  optionElement.classList.add("active");
  optionElement.setAttribute("aria-selected", "true");
  toggleDropdown();
};
const handleAlphanumericKeyPress = key => {
  const typedChar = key.toLowerCase();
  if (lastTypedChar !== typedChar) {
    lastMatchingIndex = 0;
  }
  const matchingOptions = Array.from(elements.options).filter(option => option.textContent.toLowerCase().startsWith(typedChar));
  if (matchingOptions.length) {
    if (lastMatchingIndex === matchingOptions.length) {
      lastMatchingIndex = 0;
    }
    let value = matchingOptions[lastMatchingIndex];
    const index = Array.from(elements.options).indexOf(value);
    currentOptionIndex = index;
    focusCurrentOption();
    lastMatchingIndex += 1;
  }
  lastTypedChar = typedChar;
};
elements.button.addEventListener("keydown", handleKeyPress);
document.addEventListener("click", handleDocumentInteraction);

/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
console.log('maxgraph');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

/******/ })()
;
//# sourceMappingURL=main.js.map