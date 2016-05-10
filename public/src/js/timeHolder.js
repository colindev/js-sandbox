// function timeHandler() {
//   alert("Hey what are you doing just sitting there staring at a blank screen?");
// }

// setTimeout(timeHandler, 5000);
//

var tick = true;
function ticker() {
  if (tick) {
    console.log("Tick");
    tick = false;
  } else {
    console.log("Tock");
    tick = true;
  }
}

setInterval(ticker, 1000)