
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('SyllabusInsCtrl', function($scope,$position,$http,$state) {

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

    $scope.save = function() {
      
      var syllabusData=
            "id=" + localStorage.CID
          + "&syllabus=" + $scope.newSyllabus;

      var syllabusTask = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/syllabus/edit',      
          data: syllabusData  
        };
      
      $http(syllabusTask).then(function (res) {
              
            $scope.resInfo=res.data;
          
            //code: login success or fail                               
            if($scope.resInfo.code == '0')
              alert($scope.resInfo.detail);//fail info.
            else {
              $state.go('dashboard.syllabus_ins');
            }
        });

    }
    //end save function

} );
