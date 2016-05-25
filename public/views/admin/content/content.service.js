(function(){
  "use strict";
    
  function contentService($resource){
    
    var Content = $resource("/api/admin/content/:id", {id: '@_id' });
    var Tag = $resource("/api/admin/tags/:id", {id: '@_id' });
    var Category = $resource("/api/admin/categories/:id", {id: '@_id' });

    var getContentItem = function(id){
      return Content.get({id: id}).$promise;
    };
    
    var getContent = function(){
      return Content.query().$promise;
    };
    
    var saveContentItem = function(contentdata) {
      return Content.save(contentdata).$promise;
    };
    
    var deleteContentItem = function(id) {
      return Content.remove({id: id}).$promise;
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
      saveContentItem: saveContentItem,
      deleteContentItem: deleteContentItem,
      getTags: getTags,
      getCategories: getCategories
    };
    
  }
  
  angular
    .module("admin.content")
    .factory("contentService", contentService);
  
})();