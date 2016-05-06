
var myNum = Math.floor(Math.random() * 10);
var answer = false;
var guessTimes = 0;
var guessAns = [];

console.log(myNum);

while (answer == false) {
  var guess = prompt("Please enter a number between 1 ~ 10.");

  function checkGuessed(guessNum) {
    if (guessAns.indexOf(guessNum) != -1) {
        alert("Sorry! You've guessed this number'! ");
        guessAns.push(guess);
    } else {
      alert("Sorry! You are wrong! ");
      guessTimes++;
      guessAns.push(guessNum);
    }
  }

  if (guess == myNum) {
    alert("You are right!");
    guessAns.push(guess);
    answer = true;
  } else {
    if (guessTimes == 0) {
      alert("Sorry! You are wrong! ");
      guessTimes++;
      guessAns.push(guess);
    } else {
      checkGuessed(guess);
    }
    if (guessTimes >= 3) {
      alert("You've guessed 3 times! The number is " + myNum + "!");
      answer = true;
    }
  }
}