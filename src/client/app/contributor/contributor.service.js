(function(){
	'use strict';

	angular
		.module('app.contributor')
		.factory('ContributorService', ContributorService);

	ContributorService.$inject = ['$http', '$q'];

	function ContributorService($http, $q) {
		return {
			getTopCorporateContributors: getTopCorporateContributors,
			getTopIndividualContributors: getTopIndividualContributors
		};

		//////////////////
		
		function getTopCorporateContributors() {
			var deferred = $q.defer();

			$http
				.get('/api/contributions/corporate/top')
				.success(function(contributions){
					deferred.resolve(contributions);
				})
				.error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}

		function getTopIndividualContributors(){
			var deferred = $q.defer();

			$http
				.get('/api/contributions/individuals/top')
				.success(function(contributions){
					deferred.resolve(contributions);
				})
				.error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

})();