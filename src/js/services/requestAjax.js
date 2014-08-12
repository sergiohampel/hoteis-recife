app.factory('requestAjax', ['$http', '$q', function($http, $q){

	function RequestData() {
		var that = this;

		that.ObjResult = null;

		that.getList = function(url, id){
			var deferred = $q.defer();

			if (that.ObjResult !== null) {
				deferred.resolve(that.ObjResult);
			} else {
				var request = $http({
					url: url,
					method: 'GET',
					params: {
						resource_id: id
					}
				});

				request.success(function(response){
					that.ObjResult = response;
					deferred.resolve(response);
				});

				request.error(function(response) {
                   deferred.reject(response);
                });
			};

			return deferred.promise;
		}
	}

	return new RequestData();
}]);