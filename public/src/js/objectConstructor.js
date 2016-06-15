// Dogs
// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function() {
//     if (this.weight > 25) {
//       alert(this.name + "says Woof!");
//     } else {
//       alert(this.name + "says Yip!");
//     }
//   };
// }
//
// var fido = new Dog("Fido", "Mixed", "38");
// var fluffy = new Dog("Fluffy", "Chihuahua", "30");
// var spot = new Dog("Spot", "Poodle", "10");
// var dogs = [fido, fluffy, spot];
//
// for (var i = 0; i < dogs.length; i++) {
//   var size = "small";
//   if (dogs[i].weight > 10) {
//     size = "large";
//   }
//   console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
// }
//
// for (var i = 0; i < dogs.length; i++) {
//   dogs[i].bark();
// }

// Coffee
// function Coffee(roast, ounce) {
//   this.roast = roast;
//   this.ounce = ounce;
//   this.toString = function () {
//     if (ounce == 8) {
//       return "You've ordered a small " + this.name + " coffee.";
//     } else if (ounce == 12) {
//       return "You've ordered a medium " + this.name + " coffee.";
//     } else {
//       return "You've ordered a large " + this.name + " coffee.";
//     }
//   };
// }
//
// var houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.toString());
// var darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());


// Car
function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;
  this.start = function() {
    this.started = true;
  };
  this.stop = function() {
    this.started = false;
  };
  this.drive = function() {
    if (this.started) {
      alert("Zoom zoom!");
    } else {
      alert("Start the engine first!");
    }
  };
}

// var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var chevyParams = {make:"Chevy",
                   model: "Bel Air",
                   year: 1957,
                   color: "red",
                   passengers: 2,
                   convertible: false,
                   mileage: 1021};
var chevy = new Car(chevyParams)
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// var fiat = new Car("Fiat", "500", 1957, "medium blue", 2, false, 88000);
// var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);
var cars = [chevy];
for(var i = 0; i < cars.length; i++) {
  cars[i].start();
  cars[i].drive();
  cars[i].drive();
  cars[i].stop();
}
