angular.module('chat', ['ionic'])
    .controller('TalkCtrl',function($scope){
        var messages = [];

        for(var i = 0; i < 40; i++){
            messages.push(
                {  sender : 'Henry',
                text : 'helloworld'});
        }
        $scope.messages = messages;
    });
