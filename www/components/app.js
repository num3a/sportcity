// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('spty', ['ionic', 'spty.controllers','spty.utils'])
    .run(function($ionicPlatform, $localstorage) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

        $localstorage.set('serviceUrl','http://sportcity-web-dev.elasticbeanstalk.com/api');
      });
    })
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "components/shared/menu/menuView.html",
            controller: 'AppCtrl'
          })
          .state('app.coach',{
            url:"/coach",
            views:{
              'menuContent':{
                templateUrl: "components/coach/listCoachView.html",
                controller : 'CoachListCtrl'
              }
            }
          })
          .state('app.coachDetail',{
            url:"/coach/detail/:coachId",
            views:{
              'menuContent':{
                templateUrl: "components/coach/detailCoachView.html",
                controller : 'CoachDetailCtrl'
              }
            }
          })
          .state('app.map',{
              url:"/map",
              views:{
                  'menuContent':{
                      templateUrl: "components/coach/coachMapView.html",
                      controller : 'CoachMapCtrl'
                  }
              }
          })
          .state('app.talk',{
              url:"/chat/talk/:talkId",
              views:{
                  'menuContent':{
                      templateUrl: "components/chat/talkView.html",
                      controller : 'TalkCtrl'
                  }
              }
          })
          .state('app.trainerOnly',{
                url: '/trainerOnly',
                views:{
                    'menuContent':{
                        templateUrl : 'components/trainer/trainerOnlyView.html',
                        controller : 'TrainerCtrl'
                    }
                }
          })
          .state('app.payment',{
            url:"/payment",
            views:{
              'menuContent':{
                templateUrl: "components/payment/listPaymentView.html",
                controller : 'PaymentListCtrl'
              }
            }
          })
         .state('app.main',{
                  url:"/main",
                  views:{
                    'menuContent':{
                      templateUrl: "components/home/homeView.html",
                      controller : 'HomeCtrl'
                    }
                  }
                });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/main');
    });
