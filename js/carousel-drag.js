document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".drag-scroll");

  carousels.forEach((carousel) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    // マウス操作
    carousel.addEventListener("mousedown", (e) => {
      isDown = true;
      carousel.classList.add("active");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
      isDown = false;
      carousel.classList.remove("active");
    });

    carousel.addEventListener("mouseup", () => {
      isDown = false;
      carousel.classList.remove("active");
    });

    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    });

    // タッチ操作（スマホ対応）
    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
});