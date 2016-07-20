// get current time, hour, and minutes
d = new Date();
hours = d.getHours();
minutes = d.getMinutes();

// make sure the hour and minutes are double digit
// if (hours < 10) {
//   hours = "0" + hours;
// } else {
//   hours = hours.toString();
// }
// if (minutes < 10) {
//   minutes = "0" + minutes;
// } else {
//   minutes = minutes.toString();
// }

// shorthand
hours = (hours < 10) ? "0" + hours : hours.toString();
minutes = (minutes < 10) ? "0" + minutes : minutes.toString();

time = Number(hours + minutes);

if (time >= 0000 && time < 1200) {
  message = "Good morning!";
} else if (time >= 1200 && time < 1700) {
  message = "Good afternoon!";
} else if (time >= 1700 && time < 2100) {
  message = "Good evening!";
} else if (time >= 2100 && time < 0000) {
  message = "Good night!";
}

console.log(time);
alert(message);
