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