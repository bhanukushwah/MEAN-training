angular.module('DeleteCtrl', []).controller('DeleteController',function($scope, $http){
    
    //to retrieve data from database to show details on 'show details to update' button click
    $scope.retrieve_data = function(){
        $http.get('/api/abouts').then(function(res){
            console.log(res);
            $scope.receive_data=res.data;
        })
    };
    //to delete the records in the database on the click of delete button @edit_update.html
    $scope.delete_data = function(id){
        
        $http.delete('/api/abouts/'+id).then(function(res){
            console.log(res);
        $scope.retrieve_data();
        });
    };
    
});