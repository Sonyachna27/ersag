document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burgerBtn");
  const content = document.querySelector(".header__nav_container");
  const htmlElement = document.querySelector("html");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );
});
