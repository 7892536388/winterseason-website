// Snowfall Effect
const snowfall = document.getElementById('snowfall');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`; // Randomize fall duration
    snowfall.appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, 10000); // match animation duration
}

// Generate Snowflakes
setInterval(createSnowflake, 150);

// Progress Bar
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
});

// Theme Toggle
const themeToggleButton = document.getElementById('theme-toggle');
let darkMode = false;

themeToggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#f1f1f1';
        document.getElementById('main-header').style.backgroundColor = '#222';
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        document.getElementById('main-header').style.backgroundColor = '#333';
    }
});
