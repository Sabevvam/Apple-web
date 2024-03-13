document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
  
    function updateSlide() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
      });
    }
  
    prevButton.addEventListener('click', function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
    });
  
    nextButton.addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    });
  });