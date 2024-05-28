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
  // функція для аккордеону

  const accordionItemsProduct = document.querySelectorAll(".accord-item");
  if (accordionItemsProduct) {
    accordionItemsProduct.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  }
});

//функція анімації при скролі

const catalogItem = document.querySelectorAll(".catalog__item");

const options = {
  root: document,
  rootMargin: "0px",
  threshold: 0.1,
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      entry.target.classList.add("animated");
    }
    // else if (
    //   !entry.isIntersecting &&
    //   entry.target.classList.contains("animated")
    // ) {
    //   entry.target.classList.remove("animated");
    // }
  });
};

const observer = new IntersectionObserver(callback, options);

catalogItem.forEach((item) => observer.observe(item));
