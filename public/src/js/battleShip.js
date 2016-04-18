// Step 1
// var location1 = 3;
// var location2 = 4;
// var location3 = 5;

// Step 2
var randomLoc = Math.floor(Math.random() * 7);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, target, shut! (Please enter the number between 0 to 6): ");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valued number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

var stats = "You guessed " + guesess + " times and sank the battleship!" + 
                  ", Which means your target rate is " + (3/guesses);
alert(stats);