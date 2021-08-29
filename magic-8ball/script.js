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

advBtn.addEventListener('click', () => addAdvice(advice));

function addAdvice(adv) {
    let randomNum = Math.floor(Math.random() * advice.length);
    advDisplay.style.backgroundColor = 'darkblue'; //so it doesn't show before you click the button
    advDisplay.textContent = adv[randomNum];
}

//write function to:
    // generate random color background
    // animation?
    //user input
