// Type of subject
var subject = "Just a string";
var probe = typeof subject;
// console.log(probe);

// All kinds of subjects
var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9() {return "abcdef"};
var test10 = null;

// console.log(typeof test1)
// console.log(typeof test2)
// console.log(typeof test3)
// console.log(typeof test4)
// console.log(typeof test5)
// console.log(typeof test6)
// console.log(typeof test7)
// console.log(typeof test8)
// console.log(typeof test9)
// console.log(typeof test10)


// == VS ===
// console.log("42" == 42);
// console.log("42" === 42);
// console.log("0" == 0);
// console.log("0" === 0);
// console.log("0" == false);
// console.log("0" === false);
// console.log("true" == true);
// console.log("true" === true);
// console.log(true == (1 == "1"));
// console.log(true === (1 === "1"));

function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
      return i;
    }
  }
  return -1;
};
var chevy = {
  make: "Chevy",
  model: "Bel Air"
};
var taxi = {
  make: "Webville Motors",
  model: "Taxi"
};
var fiat1 = {
  make: "Fiat",
  model: "500"
};
var fiat2 = {
  make: "Fiat",
  model: "500"
};
var lot = [chevy, taxi, fiat1, fiat2];
var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);

// console.log (loc1 + " " + loc2 + " " + loc3 + " " + loc4);

function lieDetectorTest() {
  var lies = 0;

  var stolenDiamond = {};
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
  }
  var car = {
    keysInPocket: null,
  };
  if (car.keysInPocket) {
    console.log("Oh oh, guess you stole the car!");
    lies++;
  }
  if (car.emptyGasTank) {
    console.log("You dorve the car after you stole it!");
    lies++;
  }
  var foundYouAtTheCrimeScene = [];
  if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilty!");
    lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
  }
  var yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }
  return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
  console.log("Guilty as charged!");
}