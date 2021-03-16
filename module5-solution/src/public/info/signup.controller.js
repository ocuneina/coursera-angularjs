(function () {

angular.module('public')
.controller('SignupController',SignupController);

SignupController.$inject=['MenuService','RegistrationService','$scope'];

function SignupController(MenuService, RegistrationService, $scope) {
  var reg = this;
  var dish = '';

  reg.user = {};
  reg.validMenuItem = false;
  reg.errorMsg = false;
  reg.savedUser = false;

  reg.submit = function () {
    reg.completed = true;
    console.log("button pressed");


    // Menu Item verification
    dish = reg.user.favoriteDish.toUpperCase() ;

        MenuService.getMenuItemByShortName(dish)
          .then(function(response) {
              reg.user.menuItem = response;
              reg.validMenuItem = true;
              reg.errorMsg = false;

              RegistrationService.saveInfo(reg.user);

              reg.savedUser = true;
              console.log('Information saved');


          })
          .catch(function(response){
            reg.validMenuItem = false;
            reg.errorMsg = true;
            console.log('wrong number');
          })

  };
}

})();
