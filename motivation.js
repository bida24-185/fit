// Quotes Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.quote-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    // Show first slide
    showSlide(currentSlide);
    
    // Next/previous controls
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function showSlide(n) {
        slides[n].classList.add('active');
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Challenge button animation
    const challengeBtn = document.querySelector('.accept-challenge');
    if (challengeBtn) {
        challengeBtn.addEventListener('click', function() {
            this.textContent = "Challenge Accepted!";
            this.style.backgroundColor = "#27ae60";
        });
    }
});