
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('AddCourseCtrl', function($scope,$position,$http,$state) {

    $scope.Add = function () {       
            
        var newCourseData = "id=" + localStorage.CID
            + "&code=" + $scope.newCode
            + "&title=" + $scope.newTitle
            + "&semester=" + $scope.newSemester;
    
        var UpdateInfo = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/course/add',//                        
          data: newCourseData
        };
      
        $http(UpdateInfo).then(function (res) {
          $scope.resInfo=res.data;
          
          //code: login success or fail                               
          if($scope.resInfo.code == '0')
            alert($scope.resInfo.detail);//fail info.
          else{
            $state.go('dashboard.course');
          }
        }); 

    };

});
