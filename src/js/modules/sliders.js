'use strict';

$( function() {
  if ('.product-form__slider-inner--other') {
    $('.product-form__slider-inner--other').slick({
      variableWidth: true,
      accessibility: false,
      prevArrow: ".product-form__slider-button--other-prev",
      nextArrow: ".product-form__slider-button--other-next"
    });
  }

  if ('.product-form__slider-inner--molding') {
    $('.product-form__slider-inner--molding').slick({
      variableWidth: true,
      accessibility: false,
      prevArrow: ".product-form__slider-button--molding-prev",
      nextArrow: ".product-form__slider-button--molding-next"
    });
  }
});
