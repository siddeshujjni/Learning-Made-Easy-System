
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('InstructorsCtrl', function($scope,$position,$http,$state) {

	  	//Get the instructors list
	  	var getAllInstructors = {
	        method: 'GET',
	        url: 'http://127.0.0.1:8080/people/instructor/'+localStorage.CID
	  	}; 

	  	$http(getAllInstructors).then(function (res) {
	        $scope.allInstructors = res.data;
	  	}); 
                    
} );
