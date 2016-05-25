(function(){
  "use strict";
  
  angular
    .module("articles.content", [])
    .controller("articlesController", articlesController);

  function articlesController($scope, articlesService){

    var getTags = function(){
        articlesService.getTags().then(function(tags){
          $scope.tags = tags;
        });
      };

    var getCategories = function(){
      articlesService.getCategories().then(function(categories){
        $scope.categories = categories;
      });
    };
    
    var getContent = function(){
      articlesService.getContent().then(function(content){
        $scope.content = content;
      });
    };
    getContent();
    getTags();
    getCategories();
  }
  
  articlesController.$inject = ["$scope", "articlesService"];
  
  
})();