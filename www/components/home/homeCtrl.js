angular.module('home',['ionic'])
 .controller('MainCtrl', function($scope, $ionicTabsDelegate) {
         $ionicTabsDelegate.select(0);
    });
    