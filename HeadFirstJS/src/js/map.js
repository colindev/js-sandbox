window.onload = init;

function init() {
  var map = document.getElementById("map");
  // process
  map.onmousemove = showCoords;

}

// event object
function showCoords (eventObj) {
  var map = document.getElementById("coords");
  // onmousemove
  var x = eventObj.pageX;
  var y = eventObj.pageY;
  map.innerHTML = "Map coordinates: " + x + ", " + y;
}