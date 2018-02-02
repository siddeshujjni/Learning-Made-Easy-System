
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('SubGradeCtrl', function($scope,$position,$http,$state) {

		//Get the grades information for the current student
		var getAllGrades = {
	    method: 'GET',
	  	url: 'http://127.0.0.1:8080/answers/' + localStorage.checkGradeId + '/student/' + localStorage.CID + '/course'
		}; 

		$http(getAllGrades).then(function (res) {
          	$scope.gradesList = res.data;
    }); 

    //Get the total grade
    var getTotalGrade = {
      method: 'GET',
      url: 'http://127.0.0.1:8080/reg/' + localStorage.checkGradeId
    }; 

    $http(getTotalGrade).then(function (res) {
            $scope.totalGrade = res.data;
            $scope.stuName = $scope.totalGrade.name;
            $scope.stuGrade = $scope.totalGrade.grade;
    }); 
} );
