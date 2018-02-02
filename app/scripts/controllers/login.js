
// LoginCtrl

angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

angular.module('sbAdminApp')
  .controller('LoginCtrl', function($scope,$position,$http,$state) {

	$scope.user = {
		  'id' : localStorage.ID,
		  'userName' : null,
		  'password' : null
	};

	$scope.BTlogin = function () {
		
		var loginData = "userName=" + $scope.user.userName
						+ "&password=" + $scope.user.password;
		
		var LOGIN = {
			method: 'POST',
			url: 'http://127.0.0.1:8080/user/login',//										    
			data:loginData
		};
	
		$http(LOGIN).then(function (res) {
			$scope.resInfo=res.data;
			
			//code: login success or fail																
			if($scope.resInfo.code == '0')
				alert($scope.resInfo.detail);//fail info.
			else{
				
				localStorage.ID = $scope.resInfo.detail;//detail is UID, not username
				localStorage.name = $scope.resInfo.detailName;//return fullname
				localStorage.isAdmin = $scope.resInfo.detailRole;//is admin: 1 yes; 0 no
				localStorage.chosen = false;

				$state.go('dashboard.course');
			}
		}); 
	};

});
