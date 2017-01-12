myApp.controller('chatController', ['$scope', 'Socket', function($scope, Socket){
    Socket.connet();
    
    $scope.$on('$locationChangeStart', function(event){
        Socket.disconnect(true);
    })
}])