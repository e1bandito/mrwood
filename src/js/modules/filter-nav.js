'use strict';

$( function() {
  if ('.filter') {
    $('.catalog-controls__button--filter').on('click', function () {
      $('.filter').addClass('filter--active');
      $('body').addClass('body-hidden');
    });

    $('.filter__controls-button').on('click', function () {
      $('.filter').removeClass('filter--active');
      $('body').removeClass('body-hidden');
    });
  }

  if ('.sort') {
    $('.catalog-controls__button--sort').on('click', function () {
      $('.sort').addClass('sort--active');
      $('body').addClass('body-hidden');
    });

    $('.sort__controls-button').on('click', function () {
      $('.sort').removeClass('sort--active');
      $('body').removeClass('body-hidden');
    });
  }
});
