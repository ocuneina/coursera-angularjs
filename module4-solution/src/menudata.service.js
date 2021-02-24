(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService ($http, ApiBasePath){
  var service = this;

  service.getAllCategories = function() {
    return $http({
      url: (ApiBasePath + "/categories.json")
    })
    .then (function (response){
      return response.data;
    }); //endthen
  }; //end getAllCategories


  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    })
    .then (function (response) {
      return response.data.menu_items;
    }); //endthen
  }; //end getItemsForCategory

}
})();
