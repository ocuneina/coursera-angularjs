(function () {

angular.module('ui.router')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'MenuController as menu',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/categories/menu_items/{categoryShortName}',
      templateUrl: 'templates/menu_items.html',
      params: {categoryShortName: null},
      controller: 'MenuItemController as ctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
                function($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
      }
    });

}


})();
