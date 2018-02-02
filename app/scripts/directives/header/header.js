'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('header',function(){
		return {
        templateUrl:'scripts/directives/header/header.html',
        restrict: 'E',
        replace: true,

        controller:function($scope){

        
        $scope.Reset = function () {
        	localStorage.chosen = false;
            $scope.chosen = localStorage.chosen;
        };

        $scope.chosen = localStorage.chosen;
        
      }

    }
});


