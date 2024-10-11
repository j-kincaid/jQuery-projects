
// To use a filter to apply styles to specific items in the ordered list

// These widen the book when you hit the Filter button:

// $(function(){
//     $('#book1').mouseenter(function(){
//       $("li").animate({right: '250px'});
//     });
//   });

// $(function(){
//     $("book1").mouseenter(function(){
//         $("li").animate({left: '250px'});
//     });
// });

$(function() {
    $(".filter0").click(function() {
    $('#books li:first').animate({ left: '10px' }, 1000);
    });
});

$(function() {
    $("#filter1").click(function() {
    $('#books li:eq(1)').animate({ right: '1px' }, 1000);
    });
});
$(function() {
    $("#filter2").click(function() {
    $('#books li:eq(2)').animate({ left: '-2px' }, 1000);
    });
});
$(function() {
    $("#filter4").click(function() {
    $('#books li:eq(3)').animate({ left: '300px' }, 1000);
    });
});
// This one widens the 4th book when you hit the Filter button:
$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({left: '250px'});
    });
  });

$(function() {
    $("#filter5").click(function() {
    $('#books li:last').animate({right: '1em'});
    });
});



