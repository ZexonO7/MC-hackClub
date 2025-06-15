// Initialize Vanilla Tilt for feature cards
VanillaTilt.init(document.querySelectorAll(".feature-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// Theme Toggle Function
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = true;

function updateTheme() {
    document.body.classList.toggle('light-theme');
    document.documentElement.style.setProperty('--background-dark', isDarkTheme ? '#0a0a0a' : '#ffffff');
    document.documentElement.style.setProperty('--text-light', isDarkTheme ? '#ffffff' : '#0a0a0a');
    document.documentElement.style.setProperty('--card-bg', isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)');
    themeToggle.textContent = isDarkTheme ? 'Light Theme' : 'Dark Theme';
}

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    updateTheme();
});

// Interactive Pulse Visualizer
const pulseSpeed = document.getElementById('pulseSpeed');
const pulseVisualizer = document.getElementById('pulseVisualizer');

if (pulseSpeed && pulseVisualizer) {
    pulseSpeed.addEventListener('input', (e) => {
        const speed = e.target.value;
        pulseVisualizer.style.animation = `pulse ${11 - speed}s infinite`;
    });
}

// Explore Button Animation
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const features = document.querySelector('.features');
        if (features) {
            features.scrollIntoView({ behavior: 'smooth' });
            
            // Add pulse effect to the button
            exploreBtn.classList.add('pulse-active');
            setTimeout(() => {
                exploreBtn.classList.remove('pulse-active');
            }, 200);
        }
    });
}

// Mouse Move Effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
    
    // Subtle parallax effect on feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = (rect.left + rect.width / 2) / window.innerWidth;
        const cardY = (rect.top + rect.height / 2) / window.innerHeight;
        
        const deltaX = (x - cardX) * 20;
        const deltaY = (y - cardY) * 20;
        
        card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
});

// Add glitch effect to title on hover
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'glitch 0.3s infinite';
    });

    glitchText.addEventListener('mouseout', () => {
        glitchText.style.animation = 'glitch 1s infinite';
    });
}

// Add smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add hover effects for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);
    
    window.addEventListener('load', () => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.remove();
        }, 500);
    });

    // Parallax effect for hero image
    const heroImage = document.querySelector('.parallax-image');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

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

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotate(2deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0)';
        });
    });

    // Form submission handling with validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (isValid) {
                // Add your form submission logic here
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;

                // Simulate form submission
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }

    // Add animation to images on scroll
    const images = document.querySelectorAll('.minecraft-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, {
        threshold: 0.1
    });

    images.forEach(image => {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.95)';
        image.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(image);
    });

    // Back to top button
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Dark mode toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    document.body.appendChild(themeToggle);

    let isDarkMode = true;
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('light-mode');
        themeToggle.innerHTML = isDarkMode ? '🌙' : '☀️';
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        typeWriter();
    }

    // Add particle effect to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            heroSection.appendChild(particle);
        }
    }

    // Add hover sound effect to buttons
    const buttons = document.querySelectorAll('.minecraft-button');
    const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
}); 