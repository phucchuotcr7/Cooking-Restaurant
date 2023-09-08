const hamburger = document.querySelector(".hamburger");
const close_menu = document.querySelector(".close");
console.log(hamburger);
const navbar_menu = document.querySelector(".navbar-menu");
console.log(navbar_menu);

hamburger.addEventListener("click", function () {
  navbar_menu.classList.toggle("active");
  close_menu.classList.toggle("active");
});
