
$('#fader').hover(function() {
    $(this).find('img:eq(1)').stop(true,true).fadeIn();
  }, function() {
    $(this).find('img:eq(1)').fadeOut();
  })

// 1st book
$(function() {
    $("#filter0").click(function() {
    $('#fader li:first').animate({ left: '.01em' }, 1000);
    });
});

// 2nd book
$(function() {
    $("#filter1").click(function() {
    $('#fader li:eq(1)').animate({ left: '.02em' }, 1000);
    });
});

// 3rd book
$(function() {
    $("#filter2").click(function() {
    $('#fader li:eq(2)').animate({ left: '.02em' }, 1000);
    });
});

// 4th book
$(function() {
    $("#filter3").click(function() {
    $('#fader li:last').animate({ left: '.031em' }, 1000);
    });
});