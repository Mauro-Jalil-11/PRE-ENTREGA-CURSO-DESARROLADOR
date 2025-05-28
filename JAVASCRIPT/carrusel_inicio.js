const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let counter = 0;

function updateCarousel() {
  const size = slides[0].clientWidth;
  carousel.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
  if (counter >= slides.length - 1) {
    counter = 0; 
  } else {
    counter++;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = slides.length - 1; 
  } else {
    counter--;
  }
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Auto-slide cada 10 segundos
setInterval(() => {
  counter = (counter + 1) % slides.length; 
  updateCarousel();
}, 10000); // 10000 ms = 10 segundos

window.addEventListener('resize', updateCarousel);