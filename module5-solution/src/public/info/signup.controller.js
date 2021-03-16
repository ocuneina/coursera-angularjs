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

  reg.checkMenuItem = function () {

    dish = reg.user.favoriteDish.toUpperCase();

        MenuService.getMenuItemByShortName(dish)
          .then(function(response) {
              reg.user.menuItem = response;
              reg.validMenuItem = true;

          })
          .catch(function(response){
            reg.validMenuItem = false;
            reg.errorMsg = true;
            console.log('wrong number');
          })

  }

  reg.submit = function () {
    if (reg.validMenuItem) {

      reg.completed = true;
      console.log("button pressed");

      RegistrationService.saveInfo(reg.user);
      reg.savedUser = true;
      reg.errorMsg = false;
      console.log('Information saved');
    }    

  };
}

})();
