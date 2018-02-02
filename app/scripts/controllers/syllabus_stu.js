
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('SyllabusStuCtrl', function($scope,$position,$http,$state) {

  		//Get the course information
  		var getCourseInfo = {
		    method: 'GET',
		  	url: 'http://127.0.0.1:8080/course/'+localStorage.CID
		}; 

    $scope.syllabus = "";

		$http(getCourseInfo).then(function (res) {
          	$scope.courseInfo = res.data;	
          	$scope.courseCode = $scope.courseInfo.code;
          	$scope.courseTitle = $scope.courseInfo.title;
          	$scope.courseSemester = $scope.courseInfo.semester;	
            $scope.syllabus = $scope.courseInfo.syllabus;								
        }); 

} );
