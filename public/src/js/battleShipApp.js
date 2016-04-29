var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

var ships = [ var ship1 = { locations: ["10", "20", "30"], hits: ["", "", ""] };
                     var ship2 = { locations: ["32", "33", "34"], hits: ["", "", ""] };
                     var ship3 = { locations: ["63", "64", "65"], hits: ["", "", "hit"] };]
