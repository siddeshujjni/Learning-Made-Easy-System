
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('AssignmentStuCtrl', function($scope,$position,$http,$state) {

		//Get the course all assignments
		var getAllAssignments = {
	    method: 'GET',
	  	url: 'http://127.0.0.1:8080/assignments/'+localStorage.CID
		}; 

		$http(getAllAssignments).then(function (res) {
          	$scope.assignmentsList = res.data;
    }); 

    $scope.Enter = function(AID) {

        localStorage.assignment_id = AID;

        $state.go('dashboard.assignmentSubmit');
    };
    //end showContent function
} );
