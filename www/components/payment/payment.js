angular.module('payment',['ionic','spty.services'])
  .controller('PaymentListCtrl', function($scope,$timeout, PaymentMethods, $http){
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

        /*getByhttp()
            .then(function(results){
                $scope.test = results.data;

        });*/

     getMethods();
        function getByhttp(){
            return $http.get('http://localhost:3000/api/PaymentMethods');
        }

        function getMethods(){
            PaymentMethods.find(
                { },
                function(list) { /* success */
                    $scope.paymentMethods  = list;
                },
                function(errorResponse) { /* error */
                console.log(errorResponse);
                }
            );
        }
    });