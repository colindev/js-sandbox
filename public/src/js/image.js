
window.onload = function () {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    // images[i].onclick = showAnswer;
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = reblur;
  }
};

// function showAnswer() {
//   var image = document.getElementById("zero");
//   image.src = "src/img/zero.jpg";
// }

// event object
function showAnswer (eventObj) {
  var image = eventObj.target;

  var name = image.id;
  name = "src/img/" + name + ".jpg";
  image.src = name;

  // setTimeout(reblur, 2000, image);
}

// function reblur(image) {
function reblur(eventObj) {
  var image = eventObj.target;
  var name = image.id;
  name = "src/img/" + name + "blur.jpg";
  image.src = name;
}