(function(){
  "use strict";
  
  angular
    .module("articles", ["articles.content", "ngResource", "ngRoute"])
    .config(function($routeProvider){
        	$routeProvider
        		// .when('/item/:id', {
        		// 	templateUrl: './article/articleItem.view.html',
        		// 	controller: 'articleItemController'
        		// })
        		// .when('/item/', {
        		// 	templateUrl: './article/articleItem.view.html',
        		// 	controller: 'articleItemController'
        		// })
        		.when("/", {
        			templateUrl: './article/articles.view.html',
        			controller: 'articlesController'
        		})
        		.otherwise({ redirectTo: '/' });
        });
  
}());