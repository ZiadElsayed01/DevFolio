var navBar = document.getElementsByClassName("navbar")[0];
var arrow = document.getElementsByClassName("arrow")[0];
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > 50) {
    navBar.style.background = "#000000";
    arrow.style.display = "block";
  } else {
    navBar.style.background = "transparent";
    arrow.style.display = "none";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
