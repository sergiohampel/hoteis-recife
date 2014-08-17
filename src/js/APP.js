var app = angular.module('APP', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/list.html',
		controller: 'ListCtrl'
	})

	.when('/map', {
		templateUrl: 'views/map.html',
		controller: 'MapCtrl'
	})

	.otherwise({redirect: '/'});

});