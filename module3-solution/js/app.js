(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundMenus',foundMenus);

function foundMenus() {
  var ddo ={
    templateUrl: "loader/loader.html",
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.found = [];

  menu.getMatchedMenuItems = function() {
      if (menu.searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

        promise.then(function (response) {
          menu.found = response;
          console.log(menu.found);

        })
        .catch(function (error){
          console.log("Something went terribly wrong!");
        });
      } //endif
  } //endfunction

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  }

} //endcontroller

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];

  function MenuSearchService($http, ApiBasePath) {
      var service = this;

      service.getMatchedMenuItems = function (searchTerm) {
          return $http({
            url: ApiBasePath
          })

          .then(function(response){
            var items = response.data.menu_items;
            var foundItems=[];
            searchTerm = searchTerm.toLowerCase();

            for (var i = 0; i < items.length; i++) {
              if (items[i].description.indexOf(searchTerm)!==-1 && searchTerm !== '') {
                foundItems.push(items[i]);
              } //endif
            }; //endfor

            return foundItems;
          }); //endthen

      }; //endservice

    }

})();
