var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navToggle.classList.remove("main-nav__toggle--js");
navMain.classList.toggle("main-nav--closed");

navToggle.addEventListener('click', function() {
    navMain.classList.toggle("main-nav--closed");
})

var linkChooseSize = document.querySelector(".product-card__order-button");
var popup = document.querySelector(".modal-window");
var overlay = document.querySelector(".modal-window__overlay");
var linkOrder = document.querySelectorAll(".catalog-items__icon-cart");

if (linkChooseSize) {
  linkChooseSize.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-window--closed");
  });
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-window--closed");
});

for (var i = 0; i<linkOrder.length; i++) {
linkOrder[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-window--closed");
  });
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-window--closed");
});
