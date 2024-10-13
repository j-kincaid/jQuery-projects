

// Try Event Delegation
// $('#controls button').click(function(event) {
//   event.preventDefault();
//   $('#series li').animate({ width: '200' }, 1000);
// });


// $(function() {
//   $("button").click(function(event) {

//   event.preventDefault();
//   $('#series li').animate({ 
//     width: '40em' }, 1000);
//   });
// });


// Title 1 1st book January Jinx
$(function() {
    $("#filter0").click(function() {
    $('#series li:first').animate({ 
      width: '40px' }, 1000);
    });
});

// Title 2 2nd book Fatal February
$(function() {
    $("#filter1").click(function() {
    $('#series li:eq(1)').animate({ 
      width: '40px' }, 1000);
    });
});

// Title 3 3rd book Mischief in March
$(function() {
  $("#filter2").click(function() {
  $('#series li:eq(2)').animate({ 
    width: '40px' }, 1000);
  });
});

// Title 4 4th book DSA
$(function() {
    $("#filter3").click(function() {
    $('#series li:last').animate({  
      width: '40px' }, 1000);
    });
});