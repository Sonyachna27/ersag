document.addEventListener("DOMContentLoaded", function () {
  const windowInnerWidth = window.innerWidth; // глобальна константа потрібна в декількох функціях

  const burgerMenu = document.querySelector(".burgerBtn");
  const content = document.querySelector(".header__nav_container");
  const htmlElement = document.querySelector("html");

  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });

  //функція для фіксації меню

  window.addEventListener("scroll", function () {
    const documentHeight = Math.max(document.body.scrollHeight);
    const headerNav = document.querySelector(".header__nav");
    let lastScrollTop = 0;

    if (windowInnerWidth >= 1024) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        if (scrollTop > 100) {
          headerNav.classList.add("fixed-header-nav");
        }
      } else if (scrollTop <= 0) {
        // Скролимо до верху
        headerNav.classList.remove("fixed-header-nav");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  });

  let heightAdvantagesContent = document.querySelector(
    ".advantages__content"
  ).offsetHeight;

  const stikyElement = document.querySelectorAll(".advantages__scrolling_item");
  const resizeStikyElement = () => {
    if (windowInnerWidth >= 1024 && stikyElement) {
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(100px + ${50 * index}px`;
      });
    } else if (windowInnerWidth <= 1023 && stikyElement) {
      console.log(heightAdvantagesContent);
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
});
