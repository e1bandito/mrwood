'use strict';

$( function() {
  if (".tabs__switcher-list") {
    $(".tabs__switcher-list").on("click", ".tabs__switcher-item", function(){

      var tabs = $(".tabs__switcher-item");
      var cont = $(".tabs__body-item");
      var tabActive = "tabs__switcher-item--active";
      var itemActive = "tabs__body-item--active";


      tabs.removeClass(tabActive);
      cont.removeClass(itemActive);
      $(this).addClass(tabActive);
      cont.eq($(this).index()).addClass(itemActive);

      return false;
    });
  }
});
