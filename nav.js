document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in nav
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a[href]');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('current-page');
            
            // Also highlight parent dropdown button if in a subpage
            const dropdown = link.closest('.dropdown-content');
            if (dropdown) {
                const dropbtn = dropdown.previousElementSibling;
                if (dropbtn && dropbtn.classList.contains('dropbtn')) {
                    dropbtn.classList.add('current-page');
                }
            }
        }
    });
    
    // Mobile menu toggle functionality
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('.main-nav').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.main-nav ul').classList.toggle('mobile-visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('.main-nav ul');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
    }
    
    // Dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content a')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});