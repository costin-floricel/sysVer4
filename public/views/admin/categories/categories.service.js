(function(){
  "use strict";
    
  function categoriesService($http, $resource){
    
    var Category = $resource("/api/admin/categories/:id", {id: '@_id' });

    var getCategory = function(id){
      return Category.get({id: id}).$promise;
    };
    
    var getCategories = function(){
      return Category.query().$promise;
    };
    
    var saveCategory = function(categorydata) {
      return Category.save(categorydata).$promise;
    };
    
    var deleteCategory = function(id) {
      return Category.remove({id: id}).$promise;
    };

    return {
      getCategory: getCategory,
      getCategories: getCategories,
      saveCategory: saveCategory,
      deleteCategory: deleteCategory
    };
    
  }
  
  angular
    .module("admin.categories")
    .factory("categoriesService", categoriesService);
  
})();