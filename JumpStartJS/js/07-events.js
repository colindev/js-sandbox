var myButton = document.getElementById("btnClickMe");

// function handleClick() {
//   alert("addEventListerner clicked!");
// }
// myButton.addEventListener("click", handleClick, false);

// myButton.onclick = function(e) {
//   alert("onClick clicked!");
// };


// function handleClick() {
//   alert("addEventListerner clicked!");
// }
// function handleClick2() {
//   alert("addEventListerner2 clicked!");
// }
// myButton.addEventListener("click", handleClick, false);
// myButton.addEventListener("click", handleClick2, false);

// page onload
// window.onload = function (e) {
//   alert("page loaded");
// };

// page resize
// window.onresize = function (e) {
//   alert("page resized");
// };

// get mouse position when click
// myButton.onclick = function(e) {
//   console.log(e);
// };

// get mouse position when cursor in page
// window.onmousemove = function(e) {
//   console.log(e.x + ", " + e.y);
// };

// var txtArea = document.getElementById("myTextArea");
// // get typed char
// txtArea.onkeypress = function (e) {
//   console.log(String.fromCharCode(e.keyCode));
// }

// custom events
// var event = new CustomEvent(type, eventInitDict);
var taskEvent = new CustomEvent("TaskAdded", {
  detail: {
    message: "A task has been added",
  },
  bubbles: true,
  calcelable: true
});
var btnAdd = document.getElementById("btnAdd");

btnAdd.onclick = function (e) {
  document.dispatchEvent(taskEvent);
}

function handleTaskAdded (e) {
  alert(e.detail.message);
}
document.addEventListener("TaskAdded", handleTaskAdded, false);
