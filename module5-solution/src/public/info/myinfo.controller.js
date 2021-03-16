(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController)

  MyInfoController.$inject = ['RegistrationService','ApiPath']

  function MyInfoController(RegistrationService, ApiPath) {
  var infoCtrl = this;

  infoCtrl.basePath = ApiPath;
  infoCtrl.user = RegistrationService.getInfo();
  //console.log(infoCtrl.user);

  if (angular.equals(infoCtrl.user, {})) {
            infoCtrl.signedUp = false;
            console.log("sign up first");
        } else {
            infoCtrl.signedUp = true;
        };

}

})();
