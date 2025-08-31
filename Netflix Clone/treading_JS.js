const carousel = document.getElementById("carousel");
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

let scrollPosition = 0;
const scrollAmount = 200;

leftBtn.addEventListener("click", () => {
  scrollPosition -= scrollAmount;
  if (scrollPosition < 0) scrollPosition = 0;
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});

rightBtn.addEventListener("click", () => {
  scrollPosition += scrollAmount;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (scrollPosition > maxScroll) scrollPosition = maxScroll;
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
});
