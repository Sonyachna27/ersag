document.addEventListener("DOMContentLoaded", function () {
  let windowInnerWidth = window.innerWidth; // глобальна константа потрібна в декількох функціях

  const htmlElement = document.querySelector("html");

  const burgerMenu = document.querySelector(".burgerBtn");
  const headerNav = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll("nav a");

  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowInnerWidth >= 1024) {
      if (scrollTop > lastScrollTop) {
        if (scrollTop > 100) {
          headerNav.classList.add("fixed-header-nav");
          headerNav.style.animationName = "smoothScroll";
        }
      } else if (scrollTop <= 0) {
        headerNav.classList.remove("fixed-header-nav");
        headerNav.style.animationName = "removeSmoothScroll";
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  });

  let heightAdvantagesContent = document.querySelector(
    ".advantages__content"
  ).offsetHeight;

  const stikyElement = document.querySelectorAll(".advantages__scrolling_item");
  const resizeStikyElement = () => {
    windowInnerWidth = window.innerWidth; // Оновлення глобальної константи

    if (windowInnerWidth >= 1024 && stikyElement) {
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(100px + ${50 * index}px)`;
      });
    } else if (windowInnerWidth <= 1023 && stikyElement) {
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(50px + ${50 * index}px)`;
      });
    }
  };
  resizeStikyElement();
  window.addEventListener("resize", resizeStikyElement);

  //  ініціалізація слайдеру для акцій
  const actionSliderInit = document.querySelector(".actionSlider");
  if (actionSliderInit) {
    const sliderAction = new Swiper(".actionSlider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".action-button-next",
        prevEl: ".action-button-prev",
      },

      slidesPerView: 1,
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  //
});
