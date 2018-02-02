
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('CheckAssignmentCtrl', function($scope,$position,$http,$state) {

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


    //Get the assignment information
    var getAnswerInfo = {
      method: 'GET',
      url: 'http://127.0.0.1:8080/answer/' + localStorage.answer_id
    }; 

    $http(getAnswerInfo).then(function (res) {
            $scope.answerInfo = res.data; 

            $scope.stuName = $scope.answerInfo.name;
            $scope.stuGrade = $scope.answerInfo.grade;
            $scope.stuFile = $scope.answerInfo.file;                 
    });

    $scope.Save = function() {

        //POST function
        var newGradeData = "id=" + localStorage.answer_id
            + "&grade=" + $scope.newGrade;
    
        var UpdateInfo = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/assign/grade',                        
          data: newGradeData
        };
      
        $http(UpdateInfo).then(function (res) {
          $scope.resInfo=res.data;
          
          //code: login success or fail                               
          if($scope.resInfo.code == '0')
            alert($scope.resInfo.detail);//fail info.
          else{
            $state.go('dashboard.singleAssignment');
          }
        }); 
    };
    //end showContent function
} );
