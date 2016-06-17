// Prototype 原型
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(this.name + " says WOOF!");
  } else {
    console.log(this.name + " says YIP!");
  }
};
Dog.prototype.run = function () {
  console.log("Run!");
};
Dog.prototype.wag = function () {
  console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", "38");
var fluffy = new Dog("Fluffy", "Chihuahua", "30");
var spot = new Dog("Spot", "Poodle", "10");
// 針對spot自訂bark
// spot.bark = function (){
//     console.log(this.name + " says WOOF!");
// };

// fido.bark();
// fido.run();
// fido.wag();
//
// fluffy.bark();
// fluffy.run();
// fluffy.wag();
//
// spot.bark();
// spot.run();
// spot.wag();

var barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }
};
// barnaby.sit();
// barnaby.sit();


function ShowDog(name, breed, weight, handler) {
  // this.name = name;
  // this.breed = breed;
  // this.weight = weight;
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
  console.log("Stack");
};
ShowDog.prototype.bait = function () {
  console.log("Bait");
};
ShowDog.prototype.gait = function (kind) {
  console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
  console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

// scotty.stack();
// scotty.bark();
// console.log(scotty.league);
// console.log(scotty.species);

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();



// ROBOT

function Game() {
  this.level = 0;
}

Game.prototype.play = function () {
  // play game here
  this.level++;
  console.log("Welcome to level " + this.level);
  this.unlock();
};

Game.prototype.unlock = function () {
  Robot.prototype.deployLayser = function () {
    console.log(this.name + " is blasting you with laser beans.");
  }
};

function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function () {
  // speak
  console.log("Speak!");
};
Robot.prototype.makeCoffee = function () {
  // makeCoffee
  console.log("Make Coffee!");
};
Robot.prototype.blinkLights = function () {
  // blinkLights
  console.log("Blink!");
};

Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function () {
  console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
  this.errorMessage = "I appear to have a short cricuit!";
};


// var game = new Game();

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "Geroge Jetson");
rosie.cleanHouse = function () {
  // cleanHouse
  console.log("Clean house!");
};

// while (game.level < 42) {
//   game.play();
// };

// robby.deployLayser();
// rosie.deployLayser();

// console.log(robby.name + " was designed by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
// robby.makeCoffee();
// robby.blinkLights();
//
// console.log(rosie.name + " was designed by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
// rosie.cleanHouse();

// robby.reportError();
// rosie.reportError();
// robby.spillWater();
// robby.reportError();
// rosie.reportError();

// console.log(robby.hasOwnProperty("errorMessage"));
// console.log(rosie.hasOwnProperty("errorMessage"));
