  
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('AssignCtrl', function($scope,$position,$http,$state) {

	  	//Get the students list
	  	var getAll = {
	        method: 'GET',
	        url: 'http://127.0.0.1:8080/all/student/'
	  	}; 

	  	$http(getAll).then(function (res) {
	        $scope.all = res.data;
	  	});

	  	$scope.assignInstructor = {
	  		"id" : null
	  	};

	  	$scope.save = function() {
		  
		  	var assignData=
		  				"uid=" + $scope.assignInstructor.id
						+ "&cid=" + localStorage.CID;

			  
			var assignTask = {
				  method: 'POST',
				  url: 'http://127.0.0.1:8080/role/instructor',      
				  data: assignData 	
				};
			
			$http(assignTask).then(function (res) {
				$scope.resInfo=res.data;
	          
	          	//code: login success or fail                               
	          	if($scope.resInfo.code == '0')
	            	alert($scope.resInfo.detail);//fail info.
	          	else {
	            	$state.go('dashboard.home');
	          	}
          });

		}
                    
} );
