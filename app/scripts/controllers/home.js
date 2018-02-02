
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('HomeCtrl', function($scope,$position,$http,$state) {

		//Get the course information
		var getCourseInfo = {
		    method: 'GET',
		  	url: 'http://127.0.0.1:8080/course/'+localStorage.CID
		}; 

		$http(getCourseInfo).then(function (res) {
          	$scope.courseInfo = res.data;	
          	$scope.courseCode = $scope.courseInfo.code;
          	$scope.courseTitle = $scope.courseInfo.title;
          	$scope.courseSemester = $scope.courseInfo.semester;									
    }); 

		//Get the role for the user for current class
		var getCourseRole = {
			method: 'GET',
		  	url: 'http://127.0.0.1:8080/course/'+localStorage.ID+'/role/'
		  		+localStorage.CID
		};

		$http(getCourseRole).then(function (res) {
          	$scope.roleInfo = res.data;	
          	$scope.courseRole = $scope.roleInfo.role;	
          	localStorage.role = $scope.courseRole;									
        }); 
} );
