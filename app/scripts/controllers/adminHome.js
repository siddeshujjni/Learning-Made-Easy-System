
// CourseCtrl
// Get back all courses for the current user

angular.module('sbAdminApp')
  .controller('AdminHomeCtrl', function($scope,$position,$http,$state) {

  		//Get the course information
  		var getCourseInfo = {
		    method: 'GET',
		  	url: 'http://127.0.0.1:8080/course/'+localStorage.CID
		}; 

		$http(getCourseInfo).then(function (res) {
          	$scope.courseInfo = res.data;	
          	$scope.courseCode = $scope.courseInfo.code;
          	$scope.courseTitle = $scope.courseInfo.title;
          	$scope.courseSemester = $scope.courseInfo.semester;									
        });


    $scope.Save = function () {       
            
        var newCourseData = "id=" + localStorage.CID
            + "&code=" + $scope.newCode
            + "&title=" + $scope.newTitle
            + "&semester=" + $scope.newSemester;
    
        var UpdateInfo = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/course/edit',//                        
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

    $scope.Delete = function () {       
            
        var newCourseData = "id=" + localStorage.CID;
    
        var UpdateInfo = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/course/del',//                        
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
