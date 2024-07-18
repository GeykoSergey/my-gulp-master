// const headers = document.querySelectorAll('[data-name="accordeon-title"]');
// const contents = document.querySelectorAll(".list-content");

// headers.forEach(function (item) {
//   item.addEventListener('click', showContent);
// });

// function showContent() {
//   contents.forEach(function (item) {
//     if (!item.classList.contains('hidden')) {
//       item.classList.add('hidden');
//     }
//   });
//   this.nextElementSibling.classList.toggle('hidden');
// }

// headers.forEach(function (item) {
//   item.addEventListener("click", function () {
//     if (!this.nextElementSibling.classList.contains("hidden")) {
//       this.nextElementSibling.classList.add("hidden");
//     } else {
//       contents.forEach(function (item) {
//         item.classList.add("hidden");
//       });
//       item.nextElementSibling.classList.remove("hidden");
//     }
//   });
// });

// var ua = window.navigator.userAgent;
// var msie = ua.indexOf("MSIE ");
// var isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// function isIE() {
//   ua = navigator.userAgent;
//   var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
//   return is_ie;
// }

// if (isIE()) {
//   document.querySelector("html").classList.add("ie");
// }

// if (isMobile.any()) {
//   document.querySelector("html").classList.add("_touch");
//   console.log("mobile");
// }

// const productCardImg = document.querySelector(".product-card__img");
// const swapColorBtn = document.querySelectorAll(".swap-color__input");

// swapColorBtn.forEach((el) => {
//   el.addEventListener("change", function () {
//     console.log(el);
//     let currentSrc = el.dataset.srcImg;
//     productCardImg.src = currentSrc;
//   });
// });

// ======================= view mode switcher =======================
// const viewModeBtns = document.querySelectorAll(".view-mode__btn");

// viewModeBtns.forEach(function (el) {
//   addEventListener("click", function () {
//     el.classList.toggle("view-mode__btn--active");
//     el.classList.toggle("view-mode__btn--no-active");
//   });
// });

// ======================= burger =======================

// const burgerBtn = document.querySelector(".burger-btn");
// const menu = document.querySelector(".nav");
// const info = document.querySelector(".nav__list-info");

// burgerBtn.addEventListener("click", function () {
//   burgerBtn.classList.toggle("burger-btn--active");
//   menu.classList.toggle("nav--active");
//   info.classList.toggle("nav__list-info--active");
// });

// ============= show-hide filter ===============

// const filterBtn = document.querySelector(".filter-mobile__btn-open");
// const filter = document.querySelector(".catalog-filter");
// const filterBtnClose = document.querySelector(".filter-mobile__btn-close");
// const filterOverlay = document.querySelector(".filter-overlay");

// filterBtn.addEventListener("click", function () {
//   filter.classList.add("filter--active");
//   filterOverlay.classList.add("active");
// });

// filterBtnClose.addEventListener("click", function () {
//   filter.classList.remove("filter--active");
//   filterOverlay.classList.remove("active");
// });

// ============= show-hide filter ===============

// const filterHideTrigger = document.querySelectorAll(
//   '[data-name="filter-legend"]'
// );
// console.log(filterHideTrigger);

// filterHideTrigger.forEach(function (el) {
//   el.addEventListener("click", function () {
//     this.nextElementSibling.classList.toggle("visually-hidden");
//   });
// });

// ============= main menu ===============

// находим все .main-subnav__item (первый уровень)
// обходим каждый
// если у .main-subnav__item присутствует .main-sub-subnav__list
// то конкретно этому .main-subnav__item устанавливаем
// слушатель

// const mainSubnavItems = document.querySelectorAll("[data-submenu]");

// mainSubnavItems.forEach(function (el) {
//   let mainSubSubnavList = el.querySelector("[data-sub-submenu]");
//   if (mainSubSubnavList) {
//     el.addEventListener("mouseover", function () {
//       const mainSubSubnavListHeight = mainSubSubnavList.clientHeight;
//       if (
//         mainSubSubnavListHeight >
//         document.querySelector(".main-nav__dropdown").clientHeight
//       ) {
//         document.querySelector(
//           ".main-nav__dropdown"
//         ).style.height = `${mainSubSubnavListHeight}px`;
//         document.querySelector(".main-nav__dropdown").style.width = "720px";
//       } else {
//         document.querySelector(".main-nav__dropdown").style.width = "720px";
//       }
//     });
//     el.addEventListener("mouseout", function () {
//       document.querySelector(".main-nav__dropdown").style.height = "auto";
//       document.querySelector(".main-nav__dropdown").style.width = "auto";
//     });
//   }
// });

// ================= modal =================

// const modalTrigger = document.querySelectorAll("[data-modal]");
// const modal = document.querySelector(".modal");
// const modalCloseBtn = document.querySelector("[data-close]");

// modalTrigger.forEach((el) => {
//   el.addEventListener("click", openModal);
// });

// function openModal() {
//   modal.classList.add("modal-open");
// modal.classList.remove("hide");
// document.body.style.overflow = "hidden";
// clearInterval(modalTimerId);
// }

// function closeModal() {
//   modal.classList.remove("show");
//   modal.classList.add("hide");
//   document.body.style.overflow = "";
// }

// modalCloseBtn.addEventListener("click", closeModal);

// modal.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     closeModal();
//   }
// });

// ======================== Search Bar 1 ========================
const searchBarElements = {
  input: document.querySelector("#search-bar"),
  resultData: document.querySelectorAll("[data-result]"),
};

searchBarElements.input.addEventListener("keyup", function (event) {
  const { value } = event.target;
  const searchQuery = value.toLowerCase();

  for (const element of searchBarElements.resultData) {
    let result = element.textContent.toLowerCase();

    if (result.includes(searchQuery)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});

// ======================== Search Bar With Auto-complete ========================