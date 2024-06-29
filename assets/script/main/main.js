$('.slider').slick({
  arrows: true,
  dots: true,
  prevArrow: '<img src="assets/image/arrow-left-circle-fill.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/image/arrow-right-circle-fill.png" class="slide-arrow next-arrow">',
  slidesToShow: 3,

  responsive: [
    {
      breakpoint: 768, // 399px以下のサイズに適用
      settings: {
      slidesToShow: 1,
      },
    },
  ],
});

// アコーディオン

$(function(){
  $("#ac-menu .question").on("click", function() {
    $(this).next().slideToggle();
    $(this).find('.q-right img').toggleClass('open');
  });
});