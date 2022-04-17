'use strict';

let highScore = 0;
let score = 0;
let secretNumber;

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const newGame = function () {
  //Generate secret # 1-20
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.number').textContent = secretNumber;

  //Set score to 20
  score = 20;
  document.querySelector('.score').textContent = score;

  //Clear input
  document.querySelector('.guess').value = '';

  //Reset message
  setMessage('Start guessing...');

  //Restore background color and number width and content
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  //Hide Again! button
  document.querySelector('.again').style.display = 'none';
};

newGame();

document.querySelector('.again').addEventListener('click', newGame);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    setMessage('⛔️ No number guessed');

    // When player wins
  } else if (guess === secretNumber) {
    setMessage('🎉 Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').style.display = 'block';

    //Update high score if applicable
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;

    //When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessage('💥 You lost the game!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.again').style.display = 'block';
    }
  }
});
