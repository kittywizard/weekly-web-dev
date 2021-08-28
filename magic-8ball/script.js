console.log('test');

const advBtn = document.getElementById('adviceBtn');
const advDisplay = document.getElementById('adviceDisplay');

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
];

advBtn.addEventListener('click', () => {
    advDisplay.textContent = advice[0];
});

//write function to:
    // randomly generate a number that is advice.length
    // display it in the p
    // generate random color background
    // animation?