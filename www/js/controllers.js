angular.module('starter.controllers', ['ionic','ngMap'])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
            
        
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };

        $scope.isLoggedIn = function(){
            console.log('user is not loggingIn');
            return false;
        };
        
        var getConnectedCoaches = function(){
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
            return mockData;
        };
        $scope.connectedCoaches = getConnectedCoaches();
    })

    .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {
    })
    .controller('MapCtrl', function($scope, $stateParams) {
    })
    .controller('CoachDetailCtrl', function($scope, $stateParams,$ionicPopup, $timeout, $ionicLoading) {
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

        $scope.sessions = sessions;

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
    .controller('TalkCtrl',function($scope){
        var messages = [];

        for(var i = 0; i < 40; i++){
            messages.push(
                {  sender : 'Henry',
                text : 'helloworld'});
        }
        $scope.messages = messages;
    })
    .controller('PaymentListCtrl', function($scope,$timeout){
        $scope.paypalAccounts = [
            'emmanuel.ernest@hotmail.fr',
            'eernest.pro@gmail.com'
        ];
        $scope.cards = [
            {
                name : 'Perso Card',
                type : 'Visa',
                lastDigit : '8498'
            },
            {
                name : 'Work Card',
                type : 'Amex',
                lastDigit : '8498'
            }];
    });
