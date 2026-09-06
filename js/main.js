document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".mobile-hamburger");
  const closeBtn = document.querySelector(".mobile-close");
  const menuHolder = document.querySelector(".open-menu-holder");

  if (hamburger && menuHolder) {
    hamburger.addEventListener("click", function () {
      menuHolder.classList.add("active");
    });
  }

  if (closeBtn && menuHolder) {
    closeBtn.addEventListener("click", function () {
      menuHolder.classList.remove("active");
    });
  }

  // zamknij menu po kliknięciu w link (przydatne na telefonie)
  document
    .querySelectorAll(".open-menu-holder .menu a")
    .forEach(function (link) {
      link.addEventListener("click", function () {
        menuHolder.classList.remove("active");
      });
    });
});
