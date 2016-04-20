// 4.1
var flavors = ["vanilla", "butterscotch", "lavendor", "chocolate"]
var flavorOfTheDay = flavors[2]; // pick up value from array
flavors[2] = "chocolate chip"; //update array value
var last = flavors.length - 1; // get total num of array
var recent = flavors[last];
// console.log(flavors.length + recent);

// 4.2 Make phrase
function makePhrases() {
  var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  var words2 = ["empowered", "value-added", "oriented", "focus", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  // alert(phrase);
}
// makePhrases();

// 4.3
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var scores2nd = [77, 55, 51, 52, 44, 51];

function printAndGetHighScore(scores) {
  var output;
  var highScore = 0;

  for (var i = 0;i < scores.length; i = i + 1) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(scores, highScore){
  var bestSolutions = [];
  for (var i=0; i <= scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

var highScore = printAndGetHighScore(scores);
console.log("Bubble tests: " + scores.length);
console.log("Best score: " + highScore);
var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var highScore = printAndGetHighScore(scores2nd);
console.log("Bubble tests: " + scores2nd.length);
console.log("Best score: " + highScore);
var bestSolutions = getBestResults(scores2nd, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
