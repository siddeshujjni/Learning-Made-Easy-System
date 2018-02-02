
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('AssignmentEditCtrl', function($scope,$position,$http,$state) {


    //Get the assignment information
    var getAssignmentInfo = {
      method: 'GET',
      url: 'http://127.0.0.1:8080/assignment/'+localStorage.assignment_id
    }; 

    $http(getAssignmentInfo).then(function (res) {
            $scope.assignmentInfo = res.data; 

            $scope.title = $scope.assignmentInfo.title;
            $scope.description = $scope.assignmentInfo.description;
            $scope.totalPoints = $scope.assignmentInfo.score;                 
        });


    $scope.Save = function () {       
            
        var newAssignmentData = "id=" + localStorage.assignment_id
            + "&title=" + $scope.newTitle
            + "&desc=" + $scope.newDes
            + "&due=10"
            + "&score=" + $scope.newTotal;
    
        var AssignmentInfo = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/assignment/edit',                      
          data: newAssignmentData
        };
      
        $http(AssignmentInfo).then(function (res) {
          $scope.resInfo=res.data;
          
          //code: login success or fail                               
          if($scope.resInfo.code == '0')
            alert($scope.resInfo.detail);//fail info.
          else{
            $state.go('dashboard.assignments_ins');
          }
        }); 

    };

});
