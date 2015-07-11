angular.module('trainer',['ionic', 'spty.utils'])
    .controller('TrainerCtrl', function($scope,$timeout,$http, $localstorage){
      var serviceUrl = $localstorage.get('serviceUrl');

      $http.get(serviceUrl + '/healthcheck').
       success(function(data) {
           $scope.greeting = data;

           console.log('healthcheck ==> ', data);
       });

       $scope.activities = [
           { id: 1, name: 'Running' },
           { id: 2, name: 'Fitness' },
           { id: 3, name: 'Skate' }
       ];

       $scope.selectedActivity = {};

       $scope.doCheckIn = function(){
         var activity = $scope.checkinData.activity;

          $ionicLoading.show({
              template: 'Chekin in...'
          });
       }
     });
