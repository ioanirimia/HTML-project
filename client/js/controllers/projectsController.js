myApp.controller('projectController', ['$scope', 'Api', function($scope){
    $scope.form= {};
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form, function(){
            $scope.form = {};
        })
    }
}])