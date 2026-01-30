// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced 3D Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for multiple elements
            if (entry.target.classList.contains('contact-item')) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
                entry.target.style.animationDelay = `${delay}s`;
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .cert-card, .contact-item, .stat-item, .timeline-item');
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Enhanced Navbar Effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        navbar.style.transform = 'translateZ(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.transform = 'translateZ(0)';
    }
});

// Enhanced 3D Mouse Movement Effects
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Apply subtle 3D tilt to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const tiltX = (mouseY - 0.5) * 10;
        const tiltY = (mouseX - 0.5) * 10;
        hero.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
    
    // Apply 3D effect to profile card
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const cardTiltX = (mouseY - 0.5) * 20;
        const cardTiltY = (mouseX - 0.5) * 20;
        profileCard.style.transform = `translateZ(30px) rotateX(${cardTiltX}deg) rotateY(${cardTiltY}deg)`;
    }
});

// Enhanced Button Animations
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateZ(15px) rotateX(5deg)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateZ(0) rotateX(0deg)';
    });
    
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            this.style.transform = 'scale(0.95) translateZ(10px)';
            setTimeout(() => {
                this.style.transform = 'scale(1) translateZ(0)';
            }, 150);
        }
    });
});

// Enhanced Project Card 3D Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-20px) rotateX(15deg) rotateY(10deg) translateZ(40px)';
        this.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.25)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) translateZ(0)';
        this.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
    });
    
    // Add mouse move effect for 3D tilt
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (mouseY - centerY) / centerY * 10;
        const rotateY = (mouseX - centerX) / centerX * 10;
        
        this.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(40px)`;
    });
});

// Enhanced Skill Tag 3D Effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotateY(20deg) translateZ(25px)';
        this.style.boxShadow = '0 15px 35px rgba(0, 86, 179, 0.5)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg) translateZ(0)';
        this.style.boxShadow = 'none';
    });
});

// Enhanced Timeline 3D Effects
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0) rotateX(0deg)';
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    const direction = index % 2 === 0 ? -1 : 1;
    item.style.transform = `translateX(${direction * 50}px) rotateX(-30deg)`;
    item.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
    timelineObserver.observe(item);
});

// Contact Form Handling with Backend Integration
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        try {
            // Send to Formspree (free backend service)
           const response = await fetch('https://formspree.io/f/mjgrepal', {
    method: 'POST',
    headers: {
        'Accept': 'application/json'
    },
    body: JSON.stringify(formObject)
});

            
            if (response.ok) {
                // Success
                showSuccessMessage('Message sent successfully! I\'ll get back to you soon.');
                this.reset();
                
                // Remove any existing error states
                this.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('error');
                    const errorMsg = group.querySelector('.error-message');
                    if (errorMsg) errorMsg.remove();
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Error handling
            showErrorMessage('Failed to send message. Please try again or contact me directly.');
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text').textContent = originalText;
        }
    });
    
    // Real-time form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Form validation functions
function validateField(e) {
    const field = e.target;
    const formGroup = field.closest('.form-group');
    const value = field.value.trim();
    
    // Remove existing error states
    formGroup.classList.remove('error', 'success');
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Validate based on field type
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }
    
    if (!isValid) {
        formGroup.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        formGroup.appendChild(errorElement);
    } else if (value) {
        formGroup.classList.add('success');
    }
}

function clearFieldError(e) {
    const formGroup = e.target.closest('.form-group');
    formGroup.classList.remove('error');
    const errorMsg = formGroup.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Success and Error message functions
function showSuccessMessage(message) {
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) existingMessage.remove();
    
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.appendChild(successElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        successElement.remove();
    }, 5000);
}

function showErrorMessage(message) {
    const existingMessage = document.querySelector('.error-message');
    if (existingMessage) existingMessage.remove();
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
        background: #f8d7da;
        color: #721c24;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        transform: translateZ(15px);
        animation: slideInUp 0.5s ease-out;
    `;
    errorElement.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.appendChild(errorElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        errorElement.remove();
    }, 5000);
}

// Enhanced 3D Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) translateZ(0)`;
    });
});

// Enhanced Mouse Parallax for Map Section
const mapContainer = document.querySelector('.map-container');
if (mapContainer) {
    mapContainer.addEventListener('mousemove', (e) => {
        const rect = mapContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (mouseX - centerX) / centerX * 20;
        const moveY = (mouseY - centerY) / centerY * 20;
        
        mapContainer.style.transform = `translateY(-10px) rotateX(${moveY}deg) rotateY(${moveX}deg) translateZ(15px)`;
    });
    
    mapContainer.addEventListener('mouseleave', () => {
        mapContainer.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
}

// Enhanced Statistics Counter Animation
const statItems = document.querySelectorAll('.stat-item h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseFloat(target.textContent);
            animateCounter(target, 0, finalValue, 2000);
        }
    });
}, { threshold: 0.5 });

statItems.forEach(stat => statsObserver.observe(stat));

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const increment = end > start ? 1 : -1;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Enhanced Typing Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment the next line if you want the typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Enhanced Tooltip System
function initTooltips() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.textContent;
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: all 0.3s ease;
                transform: translateY(10px) scale(0.8);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 15 + 'px';
            
            // Animate in
            requestAnimationFrame(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0) scale(1)';
            });
            
            this.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px) scale(0.8)';
                setTimeout(() => tooltip.remove(), 300);
            });
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll event handling code here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add CSS class for reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

// Enhanced 3D Card Flip Effects
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateX(20deg) rotateY(15deg) translateZ(30px)';
        this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) translateZ(0)';
        this.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
    });
});

// Initialize tooltips when page loads
document.addEventListener('DOMContentLoaded', initTooltips);

// Export functions for potential external use
window.portfolioUtils = {
    typeWriter,
    validateEmail: isValidEmail,
    initTooltips,
    showSuccessMessage,
    showErrorMessage
};
