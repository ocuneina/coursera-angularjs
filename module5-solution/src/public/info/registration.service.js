(function () {
'use strict';

angular.module('public')
.service('RegistrationService',RegistrationService);

RegistrationService.$inject = ['$http', 'ApiPath'];

function RegistrationService($http, ApiPath) {
  var service = this;
  var myInfo = {};

service.getInfo = function () {
  return myInfo;
}

service.saveInfo = function (info) {
  myInfo = info;
}

}

})();
