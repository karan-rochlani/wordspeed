window.addEventListener('load', init);


const levels = {
  easy: 6,
  medium: 4,
  hard: 2
};

const currentLevel = levels.medium;



const wordInput = document.querySelector('#word1');
const currentWord = document.querySelector('#current1');
const scoreDisplay = document.querySelector('#score1');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'quadrille',
  'checker',  
  'con',
  'Strawberry',
  'Eclipse',
  'Chandelier',
  'Ketchup',
  'Toothpaste',
  'Rainbow',
  'Bunk bed',
  'Boardgame',
  'Beehive',
  'Lemon',
  'Wreath',
  'Waffles',
  'Bubble',
  'Whistle',
  'Snowball',
  'Bouquet',
  'Headphones',
  'Fireworks',
  'Igloo',
  'Ferris wheel',
  'Banana peel',
  'Lawnmower',
  'Summer',
  'Whisk',
  'Cupcake',
  'Sleeping bag',
  'Bruise',
  'Fog',
  'Crust',
  'Battery'
];

let time = currentLevel;
let score = 0;
let isPlaying;


const timeDisplay = document.querySelector('#time1');
const message = document.querySelector('#message1');
const seconds = document.querySelector('#seconds1');
const highscoreDisplay = document.querySelector('#highscore1');


function init() {

  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  

  if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
    sessionStorage['highscore'] = score;
  } else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
  }


  if (sessionStorage['highscore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highscore'];
  }


  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}


function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}


function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
