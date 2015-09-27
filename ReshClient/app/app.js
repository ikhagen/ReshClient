var app = angular.module("reshClientApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            controller: 'UnitController',
            templateUrl: 'app/views/unitView.html'
        })
        .otherwise({ redirectTo: '/home' });
});

app.constant('REST', {
    'path': 'http://reshserver.azurewebsites.net/'
});