angular.module('trainer',['ionic', 'spty.utils','ngCordova'])
    .controller('TrainerCtrl', function($scope,$timeout,$http, $localstorage, $ionicPlatform, $ionicLoading,$cordovaGeolocation){
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
         
         var location = [10,10];
         
         var booking = {
             name : '',
             date : new Date(),
             coachId : '',
             coachName : '',
             maxParticipant : 1,
             location : location,
             price : 1,
             durationInMinutes : 30
         };
         
        $http.post(serviceUrl + '/booking')
        .success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
          })
        .error(function(data, status, headers, config) {
         // called asynchronously if an error occurs
        // or server returns response with an error status.
        });
       }

         var initialization = function(){

             $ionicLoading.show({
                 template : 'Get location ...'
             });
             $ionicPlatform.ready(function() {
                 var posOptions = {timeout: 10000, enableHighAccuracy: false};
                 $cordovaGeolocation
                     .getCurrentPosition(posOptions)
                     .then(function (position) {
                         var location = {
                             latitude : position.coords.latitude,
                             longitude : position.coords.longitude
                         };

                        $localstorage.set('location', location);

                         console.log('success location : ', location);

                     }, function(err) {
                         // error
                         $ionicLoading.hide();

                     })
                     .then(function(){
                         $ionicLoading.hide();
                     });

             });
         };

        initialization();
     });

