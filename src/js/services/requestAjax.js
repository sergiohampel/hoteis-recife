app.factory('requestAjax', ['$http', function($http){
	var http = {};
	
	http.objCache = null;

	http.getList = function(url, id){

		return $http({
			url: url,
			method: 'GET',
			params: {
				resource_id: id
			}
		});
	}

	return http;
}]);