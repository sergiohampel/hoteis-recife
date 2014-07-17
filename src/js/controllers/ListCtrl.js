app.controller('ListCtrl', ['$rootScope', '$location', 'requestAjax', '$scope', function($rootScope, $location, requestAjax, $scope){
	$rootScope.activeLink = $location.path();
	$scope.result = '';

	var url = 'http://dados.recife.pe.gov.br/api/action/datastore_search',
		id = '0d8fb090-2863-4d51-9b21-baae4bae5a11';

	if (requestAjax.objCache !== null) {
		$scope.result = requestAjax.objCache.result.records;

	} else {
	
		requestAjax.getList(url, id)
			.success(function(data, status, headers, config){
				if (data.success == true) {
					$scope.result = data.result.records;
					requestAjax.objCache = data;
				};
			})
			.error(function(data, status, headers, config){
				console.log(data);
			});
	}
}]);