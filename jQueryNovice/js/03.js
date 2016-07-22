// Ch3 Animating, Scrolling, and Resizing

// Animating
// $('p').animate({
//   padding: '0 20px',
//   fontSize: '14px',
//   opacity: '0'
// }, 1000);

$('h1').hover(function() {
  $(this).animate({paddingLeft: '+=15px'}, 200);
}, function() {
  $(this).animate({paddingLeft: '-=15px'}, 200);
});

// QA
$('#A').hide();
$('#Q').click(function (){
  $('#A').animate(
    {'height':'toggle'}, 'slow', 'easeOutBounce'
  )
});

$('.nav li').hover(function () {
  $(this)
    .stop(true)
    .animate(
      {width: '160px', backgroundColor: '#F8BBD0'},
      {duration: 500}
    )
}, function () {
  $(this)
    .stop(true)
    .animate(
      {width: '120px', backgroundColor: '#FCE4EC'},
      {duration: 500}
    )
  }
);
