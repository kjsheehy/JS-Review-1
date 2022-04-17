'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.number').textContent);

console.log();
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let highScore = 0;
let score = 0;
let secretNumber;

const newGame = function () {
  //Generate secret # 1-20
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.number').textContent = secretNumber;

  //Update high score if applicable
  if (score) highScore = score > highScore ? score : highScore;

  document.querySelector('.highscore').textContent = highScore;

  //Set score to 20
  score = 20;
  document.querySelector('.score').textContent = score;

  //Clear input
  document.querySelector('.guess').value = '';

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
    document.querySelector('.message').textContent = '⛔️ No number guessed';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').style.display = 'block';

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.again').style.display = 'block';
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.again').style.display = 'block';
    }
  }
});
