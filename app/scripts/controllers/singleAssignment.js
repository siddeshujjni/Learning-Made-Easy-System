
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('SingleAssignmentCtrl', function($scope,$position,$http,$state) {

		//Get the assignment information
    var getAssignmentInfo = {
      method: 'GET',
      url: 'http://127.0.0.1:8080/assignment/'+localStorage.assignment_id
    }; 

    $scope.assignmentTitle = "assignment Title";

    $http(getAssignmentInfo).then(function (res) {
            $scope.assignmentInfo = res.data; 

            $scope.assignmentTitle = $scope.assignmentInfo.title;
            $scope.description = $scope.assignmentInfo.desc;
            $scope.totalPoints = $scope.assignmentInfo.score;                 
    });

    //Get all the students in this class
    var getAllAnswers = {
        method: 'GET',
        url: 'http://127.0.0.1:8080/answers/' + localStorage.assignment_id + '/assignment'
    }; 

    $http(getAllAnswers).then(function (res) {
        $scope.allAnswers = res.data;
    }); 

    $scope.Check = function(AID) {
        localStorage.answer_id = AID;
        $state.go('dashboard.checkAssignment');
    };
    //end showContent function
} );
