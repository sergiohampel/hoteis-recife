app.controller('MapCtrl', ['$rootScope', '$location', 'requestAjax', '$scope', function($rootScope, $location, requestAjax, $scope){
	$rootScope.activeLink = $location.path();
}]);