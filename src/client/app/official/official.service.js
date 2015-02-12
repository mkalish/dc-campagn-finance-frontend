(function(){
	'use strict';

	angular
		.module('app.official')
		.factory('OfficialService', OfficialService);

	OfficialService.$inject = ['$http', '$q'];

	function OfficialService($http, $q) {
		return {
			getOfficialsForYear: getOfficialsForYear
		}

		/////////
		
		function getOfficialsForYear(year) {
			var deferred = $q.defer();

			$http
				.get('/api/electedOfficials/' + year)
				.success(function(officials){
					deferred.resolve(officials);
				})
				.error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}
})();