
var myNum = Math.floor(Math.random() * 10);
var answer = false;
var guessTimes = 0;
var guessAns = [];

console.log(myNum);

function checkGuess(guessNum) {
  if (guessTimes == 0) {
    alert("Sorry! You are wrong! ");
    guessTimes++;
  } else if (guessAns.indexOf(guessNum) != -1) {
    alert("Sorry! You've guessed this number'! ");
  } else {
    alert("Sorry! You are wrong! ");
    guessTimes++;
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

while (guessTimes <= 3) {
  var guess = prompt("Please enter a number between 1 ~ 10.");
  if (!gameProcess(guess)) {
    checkGuess(guess);
  } else {
    break;
  }
  if (guessTimes == 3) {
    alert("Wrong again! You've guessed 3 times! The number is " + myNum + "!");
    break;
  }
}