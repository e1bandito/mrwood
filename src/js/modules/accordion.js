'use strict';

$( function() {
  if ('.accordion') {
    $('.accordion__item .accordion__header').on('click', function(e) {
      e.preventDefault();

      if($(this).closest('.accordion__item').hasClass('accordion__item--active')) {
          $('.accordion__item').removeClass('accordion__item--active');
      } else {
          $('.accordion__item').removeClass('accordion__item--active');
          $(this).closest('.accordion__item').addClass('accordion__item--active');
      }

      var $content = $(this).next();
      $content.slideToggle(100);
      $('.accordion__item .accordion__body').not($content).slideUp('fast');
  });
  }
});
