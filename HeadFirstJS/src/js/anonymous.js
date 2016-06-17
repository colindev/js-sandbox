window.onload = function() {
  var button = document.getElementById("bake");
  button.onclick = function handleButton() {
    console.log("Time to bake the cookies.");
    cookies.bake(2500);
  };
};

var cookies = {
  instructions: "Preheat oven to 350...",
  bake: function(time) {
    console.log("Baking the cookies");
    setTimeout(done, time);
  }
};

function done() {
  alert("Cookie are ready, take them out to cool.");
  console.log("Cooling the cookies.");
  var cool = function() {
    alert("Cookies are cool, time to eat!");
  };
  setTimeout(cool, 1000);
}

// setTimeout(function() { alert("Time to take the cookies out of the oven");}, 60000);

function setTimer(doneMessage, n) {
  setTimeout(function() {
    alert(doneMessage);
  }, n);
  doneMessage= "OUCH!";
}
setTimer("Cookies are done!", 1000)



// Counter
// function makeCounter() {
//   var count = 0;
//   function counter() {
//     count = count + 1;
//     return count;
//   }
//   return counter;
// }
// var doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());

// Password
function makePassword(password) {
  return function guess(passwordGuess) {
    return (passwordGuess === password);
  };
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));


// mult N
function multN(n) {
  return function multBy(m) {
    return n * m;
  };
}
var multBy3 = multN(3);
console.log("Multiplying 2:" + multBy3(2));
console.log("Multiplying 3:" + multBy3(3));


// Counter v2
function makeCounter() {
  var count = 0;
  return {
    increment: function() {
      count++;
      return count;
    }
  };
}
var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());


// Click Me!
// var count = 0;
// window.onload = function() {
//   var button = document.getElementById("clickme");
//   button.onclick = handleClick;
// };

// function handleClick() {
//   var message = "You clicked me! ";
//   var div = document.getElementById("message");
//   count++;
//   div.innerHTML = message + count + " times!";
// }

// Click Me! closure
window.onload = function() {
  var count = 0;
  var message = "You clicked me! ";
  var div = document.getElementById("message");

  var button = document.getElementById("clickme");
  button.onclick = function() {
    count++;
    div.innerHTML = message + count + " times!";
  };
};