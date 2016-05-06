
var maxNum = 30;
var myNum = Math.floor((Math.random() * maxNum) +1);
var answer = false;
var guessTimes = 0;
var guessAns = [];
var guessMaxTimes = 5;

console.log(myNum);


function checkGuess(guessNum) {
  if ( guessNum > maxNum ||  guessNum < 1) {
    alert("The number should be 1 ~ " + maxNum);
  } else {
    // first guess or hadn't been guessed
    if (guessTimes == 0 || guessAns.indexOf(guessNum) == -1){
      alert("Sorry! You are wrong!");
      guessTimes++;
    // check if the number had been guessed
    } else if (guessAns.indexOf(guessNum) != -1) {
      alert("Sorry! You've guessed this number'! ");
    }
  }
  guessAns.push(guess);
  return;
}

function gameProcess(guess) {
  if (guess == myNum) {
    alert("You are right!");
    guessTimes++;
    return true;
  } else {
    return false;
  }
}

while (guessTimes <= guessMaxTimes) {
  var guess = prompt("Please enter a number between 1 ~ " + maxNum + ".");
  if (!gameProcess(guess)) {
    checkGuess(guess);
  } else {
    break;
  }
  if (guessTimes == guessMaxTimes) {
    alert("You've guessed " + guessMaxTimes + " times! The number is " + myNum + "!");
    break;
  }
}