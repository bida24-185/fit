document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const feedbackForm = document.getElementById('feedbackForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const submitAnotherBtn = document.getElementById('submitAnother');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show the confirmation message
        feedbackForm.style.display = 'none';
        confirmationMessage.style.display = 'block';
        
        // Scroll to confirmation message
        confirmationMessage.scrollIntoView({ behavior: 'smooth' });
    });
    
    submitAnotherBtn.addEventListener('click', function() {
        feedbackForm.style.display = 'block';
        confirmationMessage.style.display = 'none';
        feedbackForm.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Form validation would go here in a real implementation
    // For example:
    /*
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    
    feedbackForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        if (nameField.value.trim() === '') {
            isValid = false;
            // Show error
        }
        
        if (!validateEmail(emailField.value)) {
            isValid = false;
            // Show error
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    */
});