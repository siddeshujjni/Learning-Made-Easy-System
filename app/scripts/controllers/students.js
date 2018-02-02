
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('StudentsCtrl', function($scope,$position,$http,$state) {

	  	//Get the students list
	  	var getAllStudents = {
	        method: 'GET',
	        url: 'http://127.0.0.1:8080/people/student/'+localStorage.CID
	  	}; 

	  	$http(getAllStudents).then(function (res) {
	        $scope.allStudents = res.data;
	  	}); 
                    
} );
