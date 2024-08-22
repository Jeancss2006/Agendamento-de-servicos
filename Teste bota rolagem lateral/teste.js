let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.querySelectorAll('img').length;
    
    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const slideWidth = slides.querySelector('img').clientWidth;
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}