
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('CourseCtrl', function($scope,$position,$http,$state) {

  		var getCourses = {
				  method: 'GET',
				  url: 'http://127.0.0.1:8080/courselst/'+localStorage.ID+'/admin/'
				  		+localStorage.isAdmin    
				}; 

		$http(getCourses).then(function (res) {
          	$scope.allCourses=res.data;											//------------- Get the return data
        }); 

		$scope.isAdmin = (localStorage.isAdmin=='1');

		//localStorage.role = 0;
		localStorage.chosen = false;

		$scope.Enter = function (CID) {		

			localStorage.CID = CID;
			localStorage.chosen = true;

			if(localStorage.isAdmin==0)
				$state.go('dashboard.home');
			else
				$state.go('dashboard.adminHome');
		};
				
} );
