(function() {
  "use strict";
  
  function dashboardService($http) {
    
    var getVisitors = function(){
      
    }
    
    return {
      getVisitors: getVisitors
    }
    
  }

  angular
    .module("admin.dashboard")
    .factory("dashboardService", dashboardService);
  
}())