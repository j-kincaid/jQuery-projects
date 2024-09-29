
// Book covers are 600px x 400px

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

    $(function() {
        $("#slideup").click(function() {
            $("#cover").slideUp(1000);
        });
        $("#slidedown").click(function() {
            $("#cover").slideDown(200);
        });
        $("#toggle").click(function() {
            $("#cover").slideToggle("slow");
        });
    });

