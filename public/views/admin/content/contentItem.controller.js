(function(){
  "use strict";
  
  angular
    .module("admin.contentItem", [])
    .controller("contentItemController", contentItemController);

  
  
  function contentItemController($scope, contentService, usersService, $routeParams, $location){

    var getTags = function(){
        contentService.getTags().then(function(tags){
          $scope.tags = tags;
        });
      };

    var getCategories = function(){
      contentService.getCategories().then(function(categories){
        $scope.categories = categories;
      });
    };
    
    function getContentItem(){
      contentService.getContentItem($routeParams.id).then(function(contentItem) {
        $scope.contentItem = contentItem;
      });
    }
    
    function getUsers() {
      usersService.getUsers().then(function(users) {
        $scope.users = users;
      });
    }

    $scope.saveContentItem = function() {
      contentService.saveContentItem($scope.contentItem).then(function(){
        $location.path("/content");
      });
    };
    
    if($routeParams.id) {
      getContentItem();
    }
    
    getUsers();
    getCategories();
    getTags();

  }
  
  contentItemController.$inject = ["$scope", "contentService", "usersService", "$routeParams", "$location"];
  
})();