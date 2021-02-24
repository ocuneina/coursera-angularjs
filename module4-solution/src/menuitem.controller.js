(function () {
'use strict';

  angular.module('data')
  .controller ('MenuItemController',MenuItemController);

  MenuItemController.$inject = ['items'];

  function MenuItemController (items) {
    var ctrl = this;
    ctrl.items = items;
  }
})();
