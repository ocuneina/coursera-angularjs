(function () {
'use strict';

  angular.module('data')
  .controller ('MenuItemController',MenuItemController);

  MenuItemController.$inject = ['items'];

  function MenuItemController (items) {
    var ctrl = this;
    ctrl.items = items;
    // ctrl.name = itemParam.name;
    // ctrl.shortName =  itemParam.shortName;
    // ctrl.desc =  itemParam.description;
    console.log(ctrl.items);

  }
})();
