
// To use a filter to apply styles to specific items in the ordered list

$(function() {
    $("#filter").click(function() {
       $('#books li:even').animate({ width: "100px" }, 1000);
    });
});
