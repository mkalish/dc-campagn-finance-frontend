(function(){
	'use strict';

	angular
		.module('app.corporation')
		.factory('CorporationService', serviceImpl);

	serviceImpl.$inject = ['$http', '$q'];

	function serviceImpl($http, $q) {
		return {
			getInfoFor: getInfoFor
		};

		function getInfoFor(corporation) {
			var deferred = $q.defer();
			var cleanName = corporation._id.name.replace(' ', '').toLowerCase();
			var cleanState = corporation._id.state.toLowerCase();

			$http
				.get('/api/corporate/' + cleanName + '/' + cleanState)
				.success(function(corporation){
					deferred.resolve(corporation);
				})
				.error(function(err){
					console.log(err);
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}
})();