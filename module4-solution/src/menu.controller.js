(function () {
'use strict';

  angular.module('data')
  .controller ('MenuController',MenuController);

  MenuController.$inject = ['categories'];

  function MenuController (categories) {
    var menu = this;
    menu.categories = categories;

  }
})();
