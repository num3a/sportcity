angular.module('coach',['ionic', 'spty.utils'])
 .controller('CoachListCtrl',function($scope, $timeout){

        var mockData = [];
        for(var i = 0; i < 30; i++){
            var coach =
            {
                id: i,
                firstName: "Robert",
                lastName : "Henry",
                activity : "Running",
                image : 'img/fake/coach-1.jpg'
            };
            mockData.push(coach);
        }

        $scope.coachList = mockData;
        $scope.doRefresh = function(){
            $timeout(function(){
                $scope.$broadcast('scroll.refreshComplete');
            },1500);
        };
    })
        .controller('CoachDetailCtrl', function($scope, $stateParams,$ionicPopup, $timeout, $ionicLoading,$http, $localstorage) {
            var serviceUrl = $localstorage.get('serviceUrl');

            var location = {
                longitude : 10,
                latitude : 10
            };
            var getBookings = function(){
                $http.get('/booking/around', location).
                    success(function(data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        $scope.sessions = data;
                    }).
                    error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
        };
        
        
        var coach =  {
            id: 339039,
            firstName: "Robert",
            lastName : "Henry",
            activity : "Running",
            score : 4.25,
            resume : "Forcé de constater que la course à pied est un sport accessible à tous et peu onéreux, beaucoup estiment que mettre un pas devant l'autre est d'une telle évidence, comme respirer, qu'ils négligent les principes techniques élémentaires pour courir juste sans risquer de se blesser.<br><br> Je tiens par ce projet à partager avec le plus grand nombre une vision du développement à long terme de la course à pied et avoir le plaisir de participer aux progrès et la motivation des coureurs par l'application de nos conseils",
            image: 'img/fake/coach-1.jpg' };
        var sessions =     [
            {
                sessionsId : 1,
                durationInMinutes : 30,
                price : 10
            },
            {
                sessionsId : 2,
                durationInMinutes : 60,
                price : 20
            },
            {
                sessionsId : 3,
                durationInMinutes : 90,
                price : 30
            },
            {
                sessionsId : 4,
                durationInMinutes : 120,
                price : 40
            },
        ];
        
        $scope.coach = coach;

        $scope.getStarsCount = function(){
            var score = $scope.coach.score;

            var roundedScore = Math.round(score);
            return new Array(roundedScore);
        };

        $scope.bookings = getBookings();

        $scope.showResume = function() {

            var popupTitle = $scope.coach.firstName  +' \'s resume';

            var alertPopup = $ionicPopup.alert({
                title: popupTitle,
                template: $scope.coach.resume
            });

            alertPopup.then(function(res) {
                console.log('Resume popup closed');
            });
        };

        $scope.sessionCheckIn = function(){
            $ionicLoading.show({
                template: 'Coach has been informed. You will receive a SMS once session has been validated. <br /><br /> <ion-spinner icon="android"></ion-spinner>',
                duration : 3500
            });

        };
    })  
     .controller('CoachMapCtrl', function($scope, $stateParams) {
    });