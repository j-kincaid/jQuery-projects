// slick carousel plugin

$(document).ready(function(){
    $('.responsive').slick({
      dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


// Navigation



$(document).ready(function(){
  $('#navigation ul > li ul')
    .click(function(event){
      event.stopPropagation();
    })
    .filter(':not(:first)')
    .hide();
    
  $('#navigation ul > li').click(function(){
    var selfClick = $(this).find('ul:first').is(':visible');
    if(!selfClick) {
      $(this)
        .parent()
        .find('> li ul:visible')
        .slideToggle();
    }
    
    $(this)
      .find('ul:first')
      .stop(true, true)
      .slideToggle();
  });
});

// $('.card').click(function() {
//   let index = $(this).index()
//   console.log(index)
//   let currCard = $('.card').eq(index)
//   let currBody = $(`.card:eq(${index}) .card-body`)



// })