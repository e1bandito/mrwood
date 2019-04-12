'use strict';

$( function() {
  if ('.product-form__slider-inner--other') {
    $('.product-form__slider-inner--other').slick({
      variableWidth: true,
      accessibility: false,
      prevArrow: ".product-form__slider-button--prev",
      nextArrow: ".product-form__slider-button--next"
    });
  }
});
