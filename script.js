// Block images for changing
const blocks = [
    'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9c/Grass_Block_%28side%29_JE2.png',
    'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/Dirt_JE2.png',
    'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/Stone_JE2.png',
    'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/Oak_Log_%28UD%29_JE2.png'
];

// Mob images
const mobs = {
    creeper: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Creeper_JE3.png',
    zombie: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4d/Zombie_JE3.png',
    skeleton: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3a/Skeleton_JE3.png'
};

// Weather states
const weatherStates = ['Clear', 'Rain', 'Thunder'];

// Initialize variables
let blockCount = 0;
let currentBlockIndex = 0;
let isDay = true;
let currentWeather = 0;

// DOM Elements
const heroImage = document.getElementById('heroImage');
const changeBlockBtn = document.getElementById('changeBlockBtn');
const blockCountElement = document.getElementById('blockCount');
const collectBlockBtn = document.getElementById('collectBlockBtn');
const gameTimeElement = document.getElementById('gameTime');
const toggleTimeBtn = document.getElementById('toggleTimeBtn');
const mobSelect = document.getElementById('mobSelect');
const spawnMobBtn = document.getElementById('spawnMobBtn');
const mobDisplay = document.getElementById('mobDisplay');
const weatherDisplay = document.getElementById('weatherDisplay');
const changeWeatherBtn = document.getElementById('changeWeatherBtn');
const craftingSlots = document.querySelectorAll('.crafting-slot');
const craftBtn = document.getElementById('craftBtn');
const craftingResult = document.getElementById('craftingResult');

// Function 1: Change block image
if (changeBlockBtn) {
    changeBlockBtn.addEventListener('click', () => {
        currentBlockIndex = (currentBlockIndex + 1) % blocks.length;
        heroImage.src = blocks[currentBlockIndex];
        heroImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            heroImage.style.transform = 'scale(1)';
        }, 200);
    });
}

// Function 2: Collect blocks
if (collectBlockBtn) {
    collectBlockBtn.addEventListener('click', () => {
        blockCount++;
        blockCountElement.textContent = blockCount;
        
        // Add visual feedback
        const block = document.createElement('div');
        block.style.position = 'fixed';
        block.style.width = '50px';
        block.style.height = '50px';
        block.style.backgroundImage = `url(${blocks[currentBlockIndex]})`;
        block.style.backgroundSize = 'cover';
        block.style.transition = 'all 0.5s';
        block.style.left = `${Math.random() * window.innerWidth}px`;
        block.style.top = '0';
        document.body.appendChild(block);

        setTimeout(() => {
            block.style.top = `${window.innerHeight}px`;
            block.style.opacity = '0';
            setTimeout(() => block.remove(), 500);
        }, 100);
    });
}

// Function 3: Toggle day/night
if (toggleTimeBtn) {
    toggleTimeBtn.addEventListener('click', () => {
        isDay = !isDay;
        document.body.classList.toggle('night-mode');
        gameTimeElement.textContent = isDay ? 'Day' : 'Night';
    });
}

// Function 4: Spawn mobs
if (spawnMobBtn) {
    spawnMobBtn.addEventListener('click', () => {
        const selectedMob = mobSelect.value;
        const mobImg = document.createElement('img');
        mobImg.src = mobs[selectedMob];
        mobImg.style.width = '100px';
        mobImg.style.height = '100px';
        mobImg.style.position = 'relative';
        mobImg.style.animation = 'bounce 0.5s';
        
        mobDisplay.innerHTML = '';
        mobDisplay.appendChild(mobImg);
    });
}

// Function 5: Change weather
if (changeWeatherBtn) {
    changeWeatherBtn.addEventListener('click', () => {
        currentWeather = (currentWeather + 1) % weatherStates.length;
        const newWeather = weatherStates[currentWeather];
        weatherDisplay.textContent = `Current Weather: ${newWeather}`;
        
        document.body.classList.remove('rain', 'thunder');
        if (newWeather === 'Rain') {
            document.body.classList.add('rain');
        } else if (newWeather === 'Thunder') {
            document.body.classList.add('thunder');
        }
    });
}

// Function 6: Crafting system
if (craftingSlots.length > 0) {
    let selectedSlot = null;
    
    craftingSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (selectedSlot) {
                selectedSlot.style.borderColor = 'var(--minecraft-dark)';
            }
            selectedSlot = slot;
            slot.style.borderColor = 'var(--minecraft-green)';
        });
    });

    if (craftBtn) {
        craftBtn.addEventListener('click', () => {
            if (selectedSlot) {
                const item = document.createElement('div');
                item.style.width = '50px';
                item.style.height = '50px';
                item.style.backgroundImage = `url(${blocks[Math.floor(Math.random() * blocks.length)]})`;
                item.style.backgroundSize = 'cover';
                item.style.margin = '0 auto';
                
                craftingResult.innerHTML = '';
                craftingResult.appendChild(item);
                
                // Reset selection
                selectedSlot.style.borderColor = 'var(--minecraft-dark)';
                selectedSlot = null;
            }
        });
    }
}

// Add CSS animation for bouncing
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(style); 