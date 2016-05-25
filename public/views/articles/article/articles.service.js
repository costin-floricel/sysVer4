(function(){
  "use strict";
    
  function articlesService($resource){
    
    var Content = $resource("/api/admin/content/:id", {id: '@_id' });
    var Tag = $resource("/api/admin/tags/:id", {id: '@_id' });
    var Category = $resource("/api/admin/categories/:id", {id: '@_id' });

    var getContentItem = function(id){
      return Content.get({id: id}).$promise;
    };
    
    var getContent = function(){
      return Content.query().$promise;
    };

    var getTags = function(){
      return Tag.query().$promise;
    };

    var getCategories = function(){
      return Category.query().$promise;
    };

    return {
      getContent: getContent,
      getContentItem: getContentItem,
      getTags: getTags,
      getCategories: getCategories
    };
    
  }
  
  angular
    .module("articles.content")
    .factory("articlesService", articlesService);
  
})();