let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentIndex += direction;

    // Ensure the current index stays within bounds
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
