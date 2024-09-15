
// To use a filter to apply styles to specific items in the ordered list

// These widen the book when you hit the Filter button:

$(function() {
    $("#filter0").click(function() {
    $('#books li:first').animate({ width: "150px", height: "130px" }, 1000);
    });
});
$(function() {
    $("#filter1").click(function() {
    $('#books li:eq(1)').animate({ width: "150px", height: "130px" }, 1000);
    });
});
$(function() {
    $("#filter2").click(function() {
    $('#books li:eq(2)').animate({ width: "150px", height: "130px" }, 1000);
    });
});
$(function() {
    $("#filter4").click(function() {
    $('#books li:eq(3)').animate({ width: "150px", height: "130px" }, 1000);
    });
});
// This one widens the 4th book when you hit the Filter button:
    $(function() {
        $("#filter5").click(function() {
        $('#books li:last').animate({ width: "150px", height: "130px" }, 1000);
        });
    });



