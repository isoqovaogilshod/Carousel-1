const slides = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

setInterval(nextSlide, 3000);
