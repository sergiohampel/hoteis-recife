app.controller('ListCtrl', ['$rootScope', '$location', 'requestAjax', '$scope', function($rootScope, $location, requestAjax, $scope){
	$rootScope.activeLink = $location.path();
	$scope.result = '';

	var url = 'http://dados.recife.pe.gov.br/api/action/datastore_search',
		id = '0d8fb090-2863-4d51-9b21-baae4bae5a11',
		getObj = requestAjax.getList(url, id);

	getObj.then(
		// success
		function(data){
			if (data.success == true) {
				$scope.result = data.result.records;
			}
		},

		// error
		function(error){
			console.log(error);
		}
	);
}]);