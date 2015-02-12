(function(){
	'use strict';

	angular
		.module('app.election')
		.factory('ElectionService', ElectionServiceImpl);

	ElectionServiceImpl.$inject = ['$http', '$q'];

	function ElectionServiceImpl($http, $q) {
		return {
			getNextElection: getNextElection
		}

		/////////////////

		function getNextElection() {
			var deferred = $q.defer();

			$http
				.get('/api/electionCountdown')
				.success(function(date){
					deferred.resolve(date);
				})
				.error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

})();