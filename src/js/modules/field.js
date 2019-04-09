'use strict';

$( function() {
  if ('.field') {
    $(".field__input").focusout(function (evt) {
      if ($(this).val()) {
        $(evt.target).closest(".field").addClass("field--filled");
      }  else {
        $(evt.target).closest(".field").removeClass("field--filled");
      }
    });
  }
});
