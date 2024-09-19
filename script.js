const flags = [
    { src: 'ame.png', country: 'United States of America' },
    { src: 'uk.png', country: 'United Kingdom' },
    { src: 'c.png', country: 'Canada' },
    { src: 'f.png', country: 'France' },
    { src: 'g.png', country: 'Germany' },
    { src: 'j.png', country: 'Japan' },
    { src: 'b.png', country: 'Brazil' },
    { src: 'i.png', country: 'India' },
    { src: 'ch.png', country: 'China' },
    { src: 'a.png', country: 'Australia' }
    
];

let currentFlagIndex = -1;
let score = 0;

function getRandomFlagIndex() {
    return Math.floor(Math.random() * flags.length);
}

function loadFlag() {
    currentFlagIndex = getRandomFlagIndex();
    const flag = flags[currentFlagIndex];
    document.getElementById('flag').src = flag.src;
}

function checkAnswer(event) {
    event.preventDefault();
    const answer = document.getElementById('answer').value.trim();
    const correctCountry = flags[currentFlagIndex].country;

    if (answer.toLowerCase() === correctCountry.toLowerCase()) {
        document.getElementById('result').textContent = 'Correct!';
        score++;
    } else {
        document.getElementById('result').textContent = 'Incorrect. The right answer is ' + correctCountry;
    }

    document.getElementById('score').textContent = 'Score: ' + score;
    loadFlag();
    document.getElementById('answer').value = '';
}

document.getElementById('quiz-form').addEventListener('submit', checkAnswer);

window.onload = loadFlag;


