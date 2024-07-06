$('.slider').slick({
  arrows: true,
  dots: true,
  prevArrow: '<img src="assets/image/arrow-left-circle-fill.jpg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/image/arrow-right-circle-fill.jpg" class="slide-arrow next-arrow">',
  slidesToShow: 3,
    responsive: [{
      breakpoint: 1200,
      settings: {
          arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
      }
    },
  ]
});

// アコーディオン

$(function(){
  $("#ac-menu .question").on("click", function() {
    $(this).next().slideToggle();
    $(this).find('.q-right img').toggleClass('open');
  });
});