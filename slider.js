const slider = document.querySelector('.slider');
                const slides = document.querySelectorAll('.slide');
                const prevBtn = document.querySelector('.prev');
                const nextBtn = document.querySelector('.next');
                const indicators = document.querySelectorAll('.indicator');
                let currentIndex = 0;
                
                function goToSlide(index) {
                    slider.style.transform = `translateX(-${index * 100}%)`;
                    currentIndex = index;
                    
                    // Update indicators
                    indicators.forEach((ind, i) => {
                        ind.classList.toggle('active', i === index);
                    });
                }
                
                function nextSlide() {
                    currentIndex = (currentIndex + 1) % slides.length;
                    goToSlide(currentIndex);
                }
                
                function prevSlide() {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    goToSlide(currentIndex);
                }
                
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);
                
                // Click on indicator
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => goToSlide(index));
                });
                
                // Auto-slide
                let slideInterval = setInterval(nextSlide, 3000);
                
                // Pause on hover
                slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
                slider.addEventListener('mouseleave', () => {
                    slideInterval = setInterval(nextSlide, 3000);
                });