angular.module('angappRoute', []).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        //Home Page
        .when('/home', {
            templateUrl: 'views/home.html',
           controller: 'HomeController'
        })
        //About Page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        //contact Page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        //registeration page
        .when('/add',{
            templateUrl: 'views/add.html',
            controller: 'AddController'
        })
        .when('/show',{
            templateUrl: 'views/show.html',
            controller: 'ShowController'
        })
        .when('/update', {
            templateUrl: 'views/update.html',
            controller: 'UpdateController'
        })
        .when('/update/:id',{
            templateUrl: 'views/edit_update.html',
            controller: 'UpdateController'
        })
        .when('/delete', {
            templateUrl: 'views/delete.html',
            controller: 'DeleteController'
        });
        

    $locationProvider.html5Mode(true); 
}])