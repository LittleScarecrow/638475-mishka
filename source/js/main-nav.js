var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navToggle.classList.remove("main-nav__toggle--js");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });

var linkChooseSize = document.querySelector(".product-card__order-button");
var popup = document.querySelector(".modal-window");
var overlay = document.querySelector(".modal-window__overlay");

linkChooseSize.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-window--closed");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-window--closed");
});
