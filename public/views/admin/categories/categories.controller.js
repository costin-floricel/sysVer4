(function(){
  "use strict";
  
  angular
  .module("admin.categories", [])
  .controller("categoriesController", categoriesController);

  function categoriesController($scope, categoriesService){
    
    var getCategories = function(){
      categoriesService.getCategories().then(function(categories){
        $scope.categories = categories;
      });
    };
    
    var resetCategories = function(){
      $scope.category = $scope.category || {};
      $scope.category.local = {};
      $scope.category.local.name = "";
      $scope.category.local._id = null;
    };
        
    $scope.openCreateCategoriesModal = function(){
      resetCategories();
      $scope.modalTitle = "Add category";
    };
    
    $scope.openEditCategoriesModal = function(id){
      $scope.modalTitle = "Edit category";
      categoriesService.getCategory(id).then(function(category){
        $scope.category = category;
      });
    
    };
    
    $scope.saveCategory = function(){
      categoriesService.saveCategory($scope.category).then(function(){
        getCategories();
      });
    };
    
    $scope.deleteCategory = function(id) {
      categoriesService.getCategory(id).then(function(category){
        $scope.category = category;
      });
    };

    $scope.performDeleteCategory = function() {
      categoriesService.deleteCategory($scope.category._id).then(function(){
        getCategories();
      });
    };
    
    getCategories();
    resetCategories();
  }
  
})();
