(function(){
  "use strict";
  
  angular
    .module("admin.content", [])
    .controller("contentController", contentController);

  function contentController($scope, contentService){
    
    var getContent = function(){
      contentService.getContent().then(function(content){
        $scope.content = content;
      });
    }
    
    $scope.deleteContentItem = function(id) {
      contentService.getContentItem(id).then(function(contentItem) {
        $scope.contentItem = contentItem;
      })
    }
    
    $scope.performDeleteContentItem = function() {
      contentService.deleteContentItem($scope.contentItem._id).then(function(data) {
        getContent();
      });
    }
    
    getContent();
  }
  
  contentController.$inject = ["$scope", "contentService"];
  
  
})();