
// Change width of shelf
$(document).ready(function(){
  $("#start").click(function(){
    $("div").animate({width: 3000}, 3000);
  });
  $("#stop").click(function(){
    $("div").stop();
  });
});


// 1st book January Jinx
$(function() {
    $("#filter0").click(function() {
    $('#series li:first').animate({ width: '300' }, 1000);
    });
});

// 2nd book Fatal February
$(function() {
    $("#filter1").click(function() {
    $('#series li:eq(1)').animate({ width: '100' }, 1000);
    });
});

// 3rd book Mischief in March
$(function() {
  $("#filter2").click(function() {
  $('#series li:eq(2)').animate({ left: '3em' }, 1000);
  });
});

// 4th book DSA
$(function() {
    $("#filter3").click(function() {
    $('#series li:last').animate({ left: '4em' }, 1000);
    });
});