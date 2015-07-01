angular.module('payment',['ionic'])
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