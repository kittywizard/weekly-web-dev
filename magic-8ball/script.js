const advBtn = document.getElementById('adviceBtn');
const advDisplay = document.getElementById('adviceDisplay');
const questionDisplay = document.getElementById('questionDisplay');

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
];

const answers = [
    "Yes",
    "No",
    "I wouldn't, if I were you",
    "Hmmmm, nah",
    "Do it!"
]

advBtn.addEventListener('click', () => {
    let userQuestion = document.getElementById('userQuestion').value;
        //check for user input
        if (userQuestion !== '') {
            addAdvice(userQuestion, answers)
        } else {
            addAdvice(userQuestion, advice)
        }

});

function addAdvice(question, adv) {
    let randomNum = Math.floor(Math.random() * adv.length);
    advDisplay.style.backgroundColor = 'darkblue'; //so it doesn't show before you click the button
    advDisplay.textContent = adv[randomNum];

    questionDisplay.textContent = question;
}

//write function to:
    // animation?
