angular.module('home',['ionic'])
 .controller('HomeCtrl', function($scope, $ionicTabsDelegate) {
         $ionicTabsDelegate.select(0);
    });
    