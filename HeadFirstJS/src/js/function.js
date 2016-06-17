
var migrating = true;

// function declaration
function quack(num) {
  for (var i = 0; i <= num; i++) {
    console.log("quack!");
  }
}
// quack(3);

// function expression
var fly = function (num) {
  for (var i = 0; i <= num; i++) {
    console.log("Flying!");
  }
};
// fly(3);

// if (migrating) {
//   quack(4);
//   fly(4);
// }

var winner = function() { alert("WINNER!") };
var loser = function() { alert("LOSER!") };
// winner();
var a = winner;
var b = loser;
var c = loser;
// a();
// b();
c = a;
a = b;
b = c;
c = a;
a = b;
b = c;
// a();



// First Class
var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
                                { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                                { name: "Sue Property", paid: false, ticket: "firstclass" },
                                { name: "John Funcall", paid: true, ticket: "coach" } ];

function processPassengers (passengers, testFunction) {
  for (var i = 0; i <= passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Dr. Evel");
}
function checkNotPaid(passenger) {
  return (!passenger.paid);
}
function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid) {
    message = message + " has paid";
  } else {
    message = message + " has not paid";
  }
  console.log(message);
  return false;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list!")
};

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid!")
};

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
  var orderFunction;

  if (passengers.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a cocktail or wine?");
    };
  } else {
    orderFunction = function() {
      alert("Would you like a cola or water?");
    };
  }
  return orderFunction;
}
function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
serverPassengers(passengers);