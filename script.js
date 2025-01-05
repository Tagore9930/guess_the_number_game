'use strict';
const secretNumRange = 20;
let secretNum = Math.trunc(Math.random() * secretNumRange) + 1;
const msgElem = document.querySelector('.message');
const scoreElem = document.querySelector('.score');
let score = secretNumRange;
const secretNumElem = document.querySelector('.secrect-number');
// const guessInputElem = document.querySelector('.guess-input');
let highScore = 0;
const highScoreElem = document.querySelector('.highscore');

document.querySelector('.check-btn').addEventListener('click', function () {
    const guessNum = Number(document.querySelector('.guess-input').value);

    /** Valid Number */
    if (guessNum && guessNum <= secretNumRange) {
        /** Correct guessed */
        if (guessNum === secretNum) {
            msgElem.textContent = "🎉Correct Number";
            secretNumElem.textContent = secretNum;
            secretNumElem.style.width = '30rem';
            document.body.style.backgroundColor = '#60b347';
            if (highScore < score) {
                highScore = score;
                highScoreElem.textContent = highScore;
            }

            /** The guess seems a bit too low—try aiming higher! */
        } else if (guessNum < secretNum) {
            if (score > 1) {
                msgElem.textContent = "📉 To Low";
                score--;
                scoreElem.textContent = score;
            } else {
                msgElem.textContent = "💥 You lost the game!";
                scoreElem.textContent = 0;
            }
            /** The guess seems a bit too high—try aiming lower! */
        } else if (guessNum > secretNum) {
            if (score > 1) {
                msgElem.textContent = "📈 To High";
                score--;
                scoreElem.textContent = score;
            } else {
                msgElem.textContent = "💥 You lost the game!";
                scoreElem.textContent = 0;
            }
        }

    } else {
        msgElem.textContent = `⛔ Wrong Number, Number between 0 to ${secretNumRange}`;
    }
});

/** Reset game Event */
document.querySelector('.reset-game').addEventListener('click', function () {
    secretNum = Math.trunc(Math.random() * secretNumRange) + 1;
    msgElem.textContent = "Start guessing...";
    score = secretNumRange;
    scoreElem.textContent = score;
    document.querySelector('.guess-input').value = "";
    secretNumElem.textContent = "?";
    secretNumElem.style.width = "15rem";
    document.body.style.backgroundColor = "#222222";
});