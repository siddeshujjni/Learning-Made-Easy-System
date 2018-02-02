/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'scripts/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
});

//log out and delete the localStorage information;
angular.module('sbAdminApp')
  .controller('HeaderCtrl', function($scope,$position,$http,$state) {

  	$scope.name = localStorage.name;

	$scope.BTlogout = function () {
		
		localStorage.ID = "";//detail is UID, not username
		localStorage.name = "";//return fullname
		localStorage.isAdmin = "";//is admin: 1 yes; 0 no

		$state.go('login');
	};
});
