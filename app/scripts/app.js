/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    //link to homepage
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'HomeCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })

      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login',
        controller: 'LoginCtrl'
      })

      .state('dashboard.grades', {
        templateUrl:'views/grades.html',
        url:'/grades'
      })

      .state('dashboard.students', {
        templateUrl:'views/students.html',
        url: '/students',
        controller: 'StudentsCtrl'
      })

      .state('dashboard.instructors', {
        templateUrl:'views/instructors.html',
        url:'/instructors',
        controller: 'InstructorsCtrl'
      })

      .state('dashboard.syllabus', {
        templateUrl:'views/syllabus.html',
        url:'/syllabus'
      })

      .state('dashboard.assignments', {
        templateUrl:'views/assignments.html',
        url:'/assignments'
      })

      .state('dashboard.course' , {
        templateUrl:'views/course.html',
        url:'/course',
        controller: 'CourseCtrl'
      })

      .state('dashboard.adminHome' , {
        templateUrl:'views/dashboard/adminHome.html',
        url:'/adminHome',
        controller: 'AdminHomeCtrl'
      })

      .state('dashboard.addCourse' , {
        templateUrl:'views/addCourse.html',
        url:'/addCourse',
        controller: 'AddCourseCtrl'
      })

      .state('dashboard.assign' , {
        templateUrl:'views/assign.html',
        url:'/assign',
        controller: 'AssignCtrl'
      })

      .state('dashboard.syllabus_stu' , {
        templateUrl:'views/syllabus_stu.html',
        url:'/syllabus_stu',
        controller: 'SyllabusStuCtrl'
      })

      .state('dashboard.syllabus_ins' , {
        templateUrl:'views/syllabus_ins.html',
        url:'/syllabus_ins',
        controller: 'SyllabusInsCtrl'
      })

      .state('dashboard.assignments_ins' , {
        templateUrl:'views/assignments_ins.html',
        url:'/assignments_ins',
        controller: 'AssignmentsInsCtrl'
      })

      .state('dashboard.addAssignment' , {
        templateUrl:'views/addAssignment.html',
        url:'/addAssignment',
        controller: 'AddAssignmentCtrl'
      })

      .state('dashboard.assignmentEdit' , {
        templateUrl:'views/assignmentEdit.html',
        url:'/assignmentEdit',
        controller: 'AssignmentEditCtrl'
      })

      .state('dashboard.singleAssignment' , {
        templateUrl:'views/singleAssignment.html',
        url:'/singleAssignment',
        controller: 'SingleAssignmentCtrl'
      })

      .state('dashboard.checkAssignment' , {
        templateUrl:'views/checkAssignment.html',
        url:'/checkAssignment',
        controller: 'CheckAssignmentCtrl'
      })

      .state('dashboard.grade_ins' , {
        templateUrl:'views/grade_ins.html',
        url:'/grade_ins',
        controller: 'GradeInsCtrl'
      })

      .state('dashboard.subGrade' , {
        templateUrl:'views/subGrade.html',
        url:'/subGrade',
        controller: 'SubGradeCtrl'
      })

      .state('dashboard.assignments_stu' , {
        templateUrl:'views/assignments_stu.html',
        url:'/assignments_stu',
        controller: 'AssignmentStuCtrl'
      })

      .state('dashboard.assignmentSubmit' , {
        templateUrl:'views/assignmentSubmit.html',
        url:'/assignmentSubmit',
        controller: 'AssignmentSubmitCtrl'
      })

      .state('dashboard.grades_stu' , {
        templateUrl:'views/grades_stu.html',
        url:'/grades_stu',
        controller: 'GradesStuCtrl'
      })
  }]);

    
