(function() {
  "use strict";
  
  angular
    .module("admin.dashboard", [])
    .controller("dashboardController", dashboardController);
  
  function dashboardController($scope) {
    $scope.visitors = [];
  }
  
  
}())