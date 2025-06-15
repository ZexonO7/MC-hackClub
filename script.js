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

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.documentElement.style.setProperty('--background-dark', isDarkTheme ? '#0a0a0a' : '#ffffff');
    document.documentElement.style.setProperty('--text-light', isDarkTheme ? '#ffffff' : '#0a0a0a');
    themeToggle.textContent = isDarkTheme ? 'Light Theme' : 'Dark Theme';
});

// Interactive Pulse Visualizer
const pulseSpeed = document.getElementById('pulseSpeed');
const pulseVisualizer = document.getElementById('pulseVisualizer');

pulseSpeed.addEventListener('input', (e) => {
    const speed = e.target.value;
    pulseVisualizer.style.animation = `pulse ${11 - speed}s infinite`;
});

// Explore Button Animation
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    const features = document.querySelector('.features');
    features.scrollIntoView({ behavior: 'smooth' });
    
    // Add pulse effect to the button
    exploreBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        exploreBtn.style.transform = 'scale(1)';
    }, 200);
});

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
glitchText.addEventListener('mouseover', () => {
    glitchText.style.animation = 'glitch 0.3s infinite';
});

glitchText.addEventListener('mouseout', () => {
    glitchText.style.animation = 'glitch 1s infinite';
}); 