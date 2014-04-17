angular.module('ar-ng-boilerplate2.mainState', ['ui.router', 'appConfig'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider.state('mainState', {
        url: '/mainState',
        views: {
            "main": {
                controller: 'MainStateCtrl',
                templateUrl: 'mainState/mainState.tpl.html'
            }
        },
        data: {
            pageTitle: 'Main View'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('MainStateCtrl', function HomeController($scope, $state, appConfig) {
    $scope.welcome = "Welcome!";
});