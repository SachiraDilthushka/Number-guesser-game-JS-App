/* Game functions:
-player must guess a number a min and max
-player gets a certain amount of guesses
-Notify  player of guesses remaining
-notify the player of the correct answer if loose
-Let player of  the correct answer if loose
-Let player choose to play again 
*/

// Game values

let min = 1,
    max = 10,
    winingNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI element
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;
// play game again listner
    
game.addEventListener('mousedown',function(e){
    if(e.target.className ==='play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter a number between ${min} and ${max}`, 'red');


    } else {
        // check if won
        if (guess === winingNum) {
            // game over Won!
            gameOver(true, `${winingNum} is correct, YOU WIN!`);
        } else {
            // wrong number
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                // game over lost
                gameOver(false, `Game over, YOU LOST!. The correct number was ${winingNum}`);

            }else{
                // game continues -answer wrong

                // change border color
                guessInput.style.borderColor = 'red';
                // clear input
                guessInput.value = "";
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

            }
        }

    }



});

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color
    won === true ? color = "green" : color = "red";

    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;

    setMessage(msg, color);

    // play again

    guessBtn.value='Play Again';
    guessBtn.className += 'play-again';
 
}
 // get wining nuber 

 function getRandomNum(min,max){

 return Math.floor(Math.random()*(max-min+1)+min);
}


 