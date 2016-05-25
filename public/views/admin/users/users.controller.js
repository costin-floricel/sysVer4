(function(){
  "use strict";
  
  angular
  .module("admin.users", [])
  .controller("usersController", usersController);

  function usersController($scope, usersService){
    
    var getUsers = function(){
      usersService.getUsers().then(function(users){
        $scope.users = users;
      });
    };
    
    var resetUser = function(){
      $scope.user = $scope.user || {};
      $scope.user.local = {};
      $scope.user.local.email = "";
      $scope.user.local.password = "";
      $scope.user.local.name = "";
      $scope.user.local.role = "";
      $scope.user.local._id = null;
    };
        
    $scope.openCreateUserModal = function(){
      resetUser();
      $scope.modalTitle = "Create user";
    };
    
    $scope.openEditUserModal = function(id){
      $scope.modalTitle = "Edit user";
      usersService.getUser(id).then(function(user){
        $scope.user = user;
      });
    
    };
    
    $scope.saveUser = function(){
      usersService.saveUser($scope.user).then(function(){
        getUsers();
      });
    };
    
    $scope.deleteUser = function(id) {
      usersService.getUser(id).then(function(user){
        $scope.user = user;
      });
    };

    $scope.performDeleteUser = function() {
      usersService.deleteUser($scope.user._id).then(function(){
        getUsers();
      });
    };
    
    getUsers();
    resetUser();
  }
  
})();
