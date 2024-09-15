
// To use a filter to apply styles to specific items in the ordered list

// $(function() {
//     $("#filter").click(function() {
//        $('#books li:odd').animate({ width: "150px" }, 1000);
//     });
// });

// I need something that works like a variable to select (for i in "books") {"books li[i]" } or a foreach kind of function to target the list item onclick, mouseover, hover, etc.

// That can be with .length()

// Or another element, like a <p> tag for the title of the book

// $(function() {
//         $("#filter").click(function() {
//            $('#books li:eq').animate({ width: "250px", outerHeight: "100px" }, 1000);
//         });
//     });


// This one widens the 4th book when you hit the Filter button:
    $(function() {
        $("#filter").click(function() {
        $('#books li:eq(3)').animate({ width: "150px" }, 1000);
        });
    });


    // $(function()  {
    //     $('#books li:hover').on( "mouseenter mouseleave", { width: "150px" }, 1000);
    // });

