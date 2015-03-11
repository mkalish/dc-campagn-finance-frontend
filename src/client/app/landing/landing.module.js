(function(){
	'use strict';

	angular.module('app.landing', []);

	angular
		.module('app.landing')
		.run(appRun);

	appRun.$inject = ['routerHelper'];

	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}

	function getStates() {
		return [
			{
				state: 'landing',
				config: {
					url: '/',
					views: {
						'': {templateUrl: 'app/landing/landing.html'},
						'nextElection@landing': {
							templateUrl: 'app/landing/nextElection.html',
							controller: 'NextElectionController',
							controllerAs: 'vm',
							resolve: {
								next: ['ElectionService', function(ElectionService){
									return ElectionService.getNextElection();
								}]
							}
						},
						'currentOfficials@landing': {
							templateUrl: 'app/landing/currentOfficials.html',
							controller: 'CurrentOfficialsController',
							controllerAs: 'vm',
							resolve: {
								officials: ['OfficialService', function(OfficialService){
									return OfficialService.getOfficialsForYear(2014);
								}]
							}
						},
						'topIndividual@landing': {
							templateUrl: 'app/landing/topIndividual.html',
							controller: 'TopIndividualController',
							controllerAs: 'vm',
							resolve: {
								individualContributors: ['ContributorService', function(ContributorService){
									return ContributorService.getTopIndividualContributors();
								}]
							}
						},
						'topCorporate@landing': {
							templateUrl: 'app/landing/topCorporate.html',
							controller: 'TopCorporateController',
							controllerAs: 'vm',
							resolve: {
								corporateContributors: ['ContributorService', function(ContributorService){
									return ContributorService.getTopCorporateContributors();
								}]
							}
						}
					}
				}
			}
		];
	}
})();