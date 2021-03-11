// Game values
let min=1,
    max=10,
    winningNum=getRandomNum(min, max),
    guessesLeft=3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'Play-Again')
  window.location.reload();
});

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess>max)
  {
    setMessage(`Please enter a number between ${min} and ${max}`,'green');
  }

// Check if won
if(guess === winningNum)
{
  // //Game over - WON
  // //Disable input
  // guessInput.disabled = true;
  // // Change Border color
  // guessInput.style.borderColor = 'green';
  // // Set message
  // setMessage(`${winningNum} is correct !, YOU WIN`, 'green');

  gameOver(true, `${winningNum} is correct !, YOU WIN`);
} 
else{
  //Wrong number
  guessesLeft -= 1;

  if(guessesLeft == 0){
    // //Game over - LOST
    // //Disable input
    // guessInput.disabled = true;
    // // Change Border color
    // guessInput.style.borderColor = 'red';
    // // Set message
    // setMessage(`Game over !, You Lost. The correct number was ${winningNum}`, 'red');
    gameOver(false, `Game over !, You Lost. The correct number was ${winningNum}`);
    
  } else {
    //Game continues - Answer wrong

    // Change Border color
    guessInput.style.borderColor = 'red';

    // Clear input
    guessInput.value = '';

    //Tell user it is the wrong answer
    setMessage(`${guess} was not correct, ${guessesLeft} guesses left`, 'red');

  }
}


});

// Game over
function gameOver(won, msg)
{
  let color;
  won === true ? color = 'green' : color = 'red';
  //Disable input
  guessInput.disabled = true;
  // Change Border color
  guessInput.style.borderColor = color;
  // Set text Color
  message.style.color = color;
  // Set message
  setMessage(msg);

  //Play Again
  guessBtn.value = 'Play-Again';
  guessBtn.className += 'Play-Again';
}

// Get winning Num
function getRandomNum(min, max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color)
{
  message.style.color = color;
  message.textContent = msg;
}

