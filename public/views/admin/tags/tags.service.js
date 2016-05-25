(function(){
  "use strict";
    
  function tagsService($http, $resource){
    
    var Tag = $resource("/api/admin/tags/:id", {id: '@_id' });

    var getTag = function(id){
      return Tag.get({id: id}).$promise;
    };
    
    var getTags = function(){
      return Tag.query().$promise;
    };
    
    var saveTag = function(tagdata) {
      return Tag.save(tagdata).$promise;
    };
    
    var deleteTag = function(id) {
      return Tag.remove({id: id}).$promise;
    };

    return {
      getTag: getTag,
      getTags: getTags,
      saveTag: saveTag,
      deleteTag: deleteTag
    };
    
  }
  
  angular
    .module("admin.tags")
    .factory("tagsService", tagsService);
  
})();