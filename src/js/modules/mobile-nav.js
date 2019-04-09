'use strict';

$( function() {
  if ('.mobile-nav') {
    $('.page-header__nav-button').on('click', function () {
      $('.mobile-nav').toggleClass('mobile-nav--open');
      $('.page-header__button-text--close').toggleClass('page-header__button-text--close-active');
      $('.page-header__button-text--main').toggleClass('page-header__button-text--main-close');
      $('.page-header__nav-button').toggleClass('page-header__nav-button--close');
    });
  }
});
