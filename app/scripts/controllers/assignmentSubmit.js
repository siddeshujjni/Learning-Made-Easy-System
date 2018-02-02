
angular.module('sbAdminApp').config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});

// CourseCtrl
// Get back all courses for the current user


angular.module('sbAdminApp')
  .controller('AssignmentSubmitCtrl', function($scope,$position,$http,$state) {

    //Get the assignment answer
    var getAnswerInfo = {
      method: 'GET',
      url: 'http://127.0.0.1:8080/answers/'+localStorage.assignment_id +'/student/' + localStorage.ID
    }; 


    $scope.assignmentTitle = "assignment Title";

    $http(getAnswerInfo).then(function (res) {
            $scope.answerInfo = res.data; 

            $scope.answerCode = $scope.answerInfo.code;
            $scope.answerDetail = $scope.answerInfo.detail; 
            $scope.answer_id = $scope.answerInfo.detailName;    
    });


    //Get the assignment information
    var getAssignmentInfo = {
      method: 'GET',
      url: 'http://127.0.0.1:8080/assignment/' + localStorage.assignment_id
    }; 


    $http(getAssignmentInfo).then(function (res) {
            $scope.assignmentInfo = res.data; 

            $scope.assTitle = $scope.assignmentInfo.title;
            $scope.assDesc = $scope.assignmentInfo.description;           
    });

    $scope.Save = function() {

      if($scope.answerCode=='1') { //edit

          //POST function
          var newGradeData = "id=" + $scope.answer_id
              + "&file=" + $scope.newSubmit;
      
          var UpdateInfo = {
            method: 'POST',
            url: 'http://127.0.0.1:8080/answer/edit',                        
            data: newGradeData
          };
        
          $http(UpdateInfo).then(function (res) {
            $scope.resInfo=res.data;
            
            //code: login success or fail                               
            if($scope.resInfo.code == '0')
              alert($scope.resInfo.detail);//fail info.
            else{
              $state.go('dashboard.home');
            }
          }); 

      }
      else { //add new


          //POST function
          var newGradeData = "aid=" + localStorage.answer_id
              + "&cid=" + localStorage.CID
              + "&uid=" + localStorage.ID
              + "&title=" + $scope.assTitle
              + "&name=" + localStorage.name
              + "&file=" + $scope.newSubmit;
      
          var UpdateInfo = {
            method: 'POST',
            url: 'http://127.0.0.1:8080/answer/add',                        
            data: newGradeData
          };
        
          $http(UpdateInfo).then(function (res) {
            $scope.resInfo=res.data;
            
            //code: login success or fail                               
            if($scope.resInfo.code == '0')
              alert($scope.resInfo.detail);//fail info.
            else{
              $state.go('dashboard.home');
            }
          }); 

      }


    };
    //end showContent function
} );
