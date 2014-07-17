app.directive('googleMap', ['requestAjax', function(requestAjax){
	return {
		restrict: 'E',
		template: '<div></div>',
		replace: true,
		link: function(scope, element, attrs){

			scope.makeMap = function(arr){
				var mapOptions = {
					center: new google.maps.LatLng(-8.087410, -34.884766),
					zoom: 12
				};
				var map = new google.maps.Map(document.getElementById(attrs.id),
					mapOptions);

				for (var i = 0; i < arr.length; i++) {
					var hotel = arr[i];

					var infowindow = new google.maps.InfoWindow();

					var marker = new google.maps.Marker({
					    position: new google.maps.LatLng(hotel.latitude, hotel.longitude),
					    map: map,
					    title: hotel.nome,
					    address: hotel.endereco,
					    site: hotel.site,
					    phone: hotel.telefone
					});

					google.maps.event.addListener(marker, 'click', (function(marker, i) {
					    return function() {
					    	infowindow.setContent(
					    		marker.site !== '' ?
						    		'<div class="info">' +
							    		'<h1>'           + marker.title   + '</h1>' +
							    		'<h2>Endereço: ' + marker.address + '</h2>' +
							    		'<h3>Telefone: ' + marker.phone   + '</h3>' +
							    		'<h4>Site: <a href="http://' + marker.site + '">'     + marker.site    + '</a></h4>' +
						    		'</div>'
					    		:
					    			'<div class="info">' +
							    		'<h1>'           + marker.title   + '</h1>' +
							    		'<h2>Endereço: ' + marker.address + '</h2>' +
							    		'<h3>Telefone: ' + marker.phone   + '</h3>' +
						    		'</div>'
					    		
					    	);
					        infowindow.open(map, marker);
					    }
					})(marker))
				};
			}

			var url = 'http://dados.recife.pe.gov.br/api/action/datastore_search',
				id = '0d8fb090-2863-4d51-9b21-baae4bae5a11'

			if (requestAjax.objCache !== null) {
				scope.makeMap(requestAjax.objCache.result.records);

			} else {

				requestAjax.getList(url, id)
					.success(function(data, status, headers, config){
						if (data.success == true) {
							scope.makeMap(data.result.records);
							requestAjax.objCache = data;
						};
					})
					.error(function(data, status, headers, config){
						console.log(data);
					});
			}
			
		}
	}
}]);