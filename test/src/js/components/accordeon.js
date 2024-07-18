const headers = document.querySelectorAll('[data-name="accordeon-title"]');
const contents = document.querySelectorAll('.list-content');

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

headers.forEach(function (item) {
  item.addEventListener('click', function () {
    if (!this.nextElementSibling.classList.contains('hidden')) {
      this.nextElementSibling.classList.add('hidden');
    } else {
      contents.forEach(function (item) {
        item.classList.add('hidden');
      });
      item.nextElementSibling.classList.remove('hidden');
    }
  });
});