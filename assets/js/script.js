document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burgerBtn");
  const content = document.querySelector(".header__nav_container");
  const htmlElement = document.querySelector("html");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  // фунція для визначення положення елементів з липким позиціонуванням в секції  переваг
  let heightAdvantagesContent = document.querySelector(
    ".advantages__content"
  ).offsetHeight;
  const windowInnerWidth = window.innerWidth;
  const stikyElement = document.querySelectorAll(".advantages__scrolling_item");
  const resizeStikyElement = () => {
    if (windowInnerWidth >= 1024 && stikyElement) {
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(100px + ${50 * index}px`;
      });
    } else if (windowInnerWidth <= 1023 && stikyElement) {
      console.log(heightAdvantagesContent);
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(${heightAdvantagesContent}px + 50px + ${
          50 * index
        }px)`;
      });
    }
  };
  resizeStikyElement();
  window.addEventListener("resize", resizeStikyElement);
  const actionSliderInit = document.querySelector(".actionSlider");
  if (actionSliderInit) {
    const sliderAction = new Swiper(".actionSlider", {
      pagination: {
        el: ".swiper-pagination action__pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".action-button-next",
        prevEl: ".action-button-prev",
      },

      slidesPerView: 1,
      spaceBetween: 10,
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
