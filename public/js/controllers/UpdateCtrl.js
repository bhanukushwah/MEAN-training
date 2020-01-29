angular.module('UpdateCtrl', []).controller('UpdateController',function($scope, $http, $routeParams){
    
    //to retrieve data from database to show details on 'show details to update' button click
    $scope.retrieve_data = function(){
        $http.get('/api/abouts').then(function(res){
            console.log(res);
            $scope.receive_data=res.data;
        })
    };
    //to retrieve the selected records from database on update button click to update the details @update.html
    //$routeParams.id
    $scope.retrieve_data_ind = function(){
        $http.get('/api/abouts/'+$routeParams.id).then(function(res){
            console.log(res);
            $scope.receive_data_ind=res.data
        })
    };
    //to save the records in the database on the click of update button @edit_update.html
    $scope.update_data = function(id){
        $scope.data = $scope.receive_data_ind[0];
        $http.put('/api/abouts/'+id, JSON.stringify($scope.data)).then(function(res){
            console.log(res);
        });
    };
});