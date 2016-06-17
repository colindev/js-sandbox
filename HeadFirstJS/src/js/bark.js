function bark(name, weight) {
  if (weight > 20) {
    console.log(name + "says WOOF WOOF WOOF");
  } else {
    console.log(name + " says woof woof woof");
  }
}

// bark("rover", 23);
// bark("sopt", 13);
// bark("spike", 53);
// bark("lady", 17);
// bark("juni", 20);
// bark("scottie", -1);
// bark("dino", 0, 0);
// bark("fido", "20");
// bark("lady", 10);
// bark("bruno", 21);

function doIt(param) {
  param = 2;
}
var test = 1;
// doIt(test);
// console.log(test);

// Return

function bake(degrees) {
  var message;
  if (degrees > 500) {
    message = "Too hot!";
  } else if (degrees < 100) {
    message = "Too cold!";
  } else {
    message = "Perfect!";
    // setMode("bake");
    // setTemp(degress);
  }
  return message;
}
var stats = bake(350);
// console.log(stats);

// The Thing-A-Ma-Vig
function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}
function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}
function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(3);
console.log(clunkCounter);