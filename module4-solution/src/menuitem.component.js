(function () {
'use strict';
  angular.module('data')
  .component('menu_item',{
    templateUrl: "templates/menu_items.html",
    bindings: {
      items: "<"
    }
  });
})();
