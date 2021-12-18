const scoreDisplay = document.querySelector('.score');
let score = 0;

const btn = document.querySelectorAll('.btn');
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        listen(btn.id)
    });
});

const playBtn = document.getElementById('play');
playBtn.addEventListener('click', playSound);

//need to reset this every time duh
let randoNum = Math.floor((Math.random() * ((btn.length - 1) - 1 + 1)) + 1);

function playSound() {
    let audio = new Audio(`sounds/${btn[randoNum].id}.mp3`);

    //wait a short second before playing
    setTimeout(() => audio.play(), 1000);

}


function listen(id) {
    console.log(`ID of clicked button: ${id} and ID of random audio: ${btn[randoNum].id}.`);
    if(id === btn[randoNum].id) {
        //ta da you win!
        score++;
        scoreDisplay.textContent = score;
    }
}