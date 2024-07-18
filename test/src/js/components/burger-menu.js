const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".nav");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("burger-btn--active");
  menu.classList.toggle("nav--active");
});
