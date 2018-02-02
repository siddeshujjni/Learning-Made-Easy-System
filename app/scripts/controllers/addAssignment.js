
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('AddAssignmentCtrl', function($scope,$position,$http,$state) {

    $scope.Save = function () {       
            
        var newAssignmentData = "cid=" + localStorage.CID
            + "&title=" + $scope.newTitle
            + "&desc=" + $scope.newDes
            + "&due=10"
            + "&score=" + $scope.newTotal;
    
        var AssignmentInfo = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/assignment/add',                      
          data: newAssignmentData
        };
      
        $http(AssignmentInfo).then(function (res) {
          $scope.resInfo=res.data;
          
          //code: login success or fail                               
          if($scope.resInfo.code == '0')
            alert($scope.resInfo.detail);//fail info.
          else{
            $state.go('dashboard.home');
          }
        }); 

    };

});
