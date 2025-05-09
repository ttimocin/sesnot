document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            // Ensure targetId includes the '#' for querySelector
            if (targetId.length > 1 && targetId.startsWith('#')) {
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Smooth scrolling for CTA buttons pointing to sections
    const ctaLinks = document.querySelectorAll('.cta-button[href^="#"], .cta-button-outline[href^="#"]');
    ctaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
             if (targetId.length > 1 && targetId.startsWith('#')) {
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // Handle Sign Up Form Submission (Basic Example)
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.elements['email'].value;
            if (email) {
                // In a real application, you would send this to your backend
                console.log('Sign up attempt with email:', email);
                alert('Thank you for signing up! (This is a demo)');
                this.reset(); // Clear the form
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Optional: Simple animation or interaction on scroll
    const animatedSections = document.querySelectorAll('#features, #testimonials, #pricing');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

});

// Add a CSS class for the fade-in animation
const style = document.createElement('style');
style.innerHTML = `
.fade-in-visible {
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);
