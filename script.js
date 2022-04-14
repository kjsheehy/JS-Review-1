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

//Generate secret # 1-20
let number = Math.ceil(Math.random() * 20);
document.querySelector('.number').textContent = number;

document.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number guessed';
  }
});
