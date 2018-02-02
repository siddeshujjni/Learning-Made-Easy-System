
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('GradeInsCtrl', function($scope,$position,$http,$state) {

		//Get the grades information
		var getAllGrades = {
	    method: 'GET',
	  	url: 'http://127.0.0.1:8080/reg/student/'+localStorage.CID
		}; 

		$http(getAllGrades).then(function (res) {
          	$scope.gradesList = res.data;
    }); 

    $scope.showGrade = function(UID) {

        localStorage.checkGradeId = UID;

        $state.go('dashboard.subGrade');
    };
    //end showGrade function
} );
