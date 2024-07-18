const favoriteBtns = document.querySelectorAll(".btn-favorite");

favoriteBtns.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.target.classList.toggle("btn-favorite--active");
  });
});
