(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.countItems = function () {
      var totalItemValue = calculateItem($scope.name);
      $scope.totalValue = totalItemValue;
      $scope.message = sayIt($scope.totalValue);
    };


    function calculateItem (string) {
      var totalStringValue = 0;
      var words = string.split(',');

      totalStringValue = words.length;
      for (var i = 0; i < words.length; i++)
      if ((words[i]=="") || (words[i]==" ")) {
        totalStringValue--;  //comma and blank spaces
      }

      return totalStringValue;
    }

  };

  function sayIt (value) {

    if ((value == 0)) {
      return "Please enter data first!";
    }
    else {
        if (value <= 3) {
          return "Enjoy!";
        } else {
          return "Too much!";
        }
    }
  };


})();
