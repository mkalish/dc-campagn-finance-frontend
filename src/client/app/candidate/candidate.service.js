(function(){
	'use strict';

	angular
		.module('app.candidate')
		.factory('CandidateService', serviceImpl);

	serviceImpl.$inject = ['$http', '$q'];

	function serviceImpl($http, $q) {
		return {
			findCandidate: findCandidate
		};

		///////////
		
		function findCandidate(firstName, lastName){
			var deferred = $q.defer();

			$http
				.get('/api/candidate/' + lastName + '/' +firstName)
				.success(function(candidate){
					deferred.resolve(candidate);
				})
				.error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

})();