(function(){
	'use strict';

	angular.module('app.candidate', []);

	angular
		.module('app.candidate')
		.run(appRun);

	appRun.$inject = ['routerHelper'];

	function appRun(routerHelper){
		routerHelper.configureStates(getStates());
	}

	function getStates(){
		return [
			{
				state: 'candidate',
				config: {
					url: '/candidate/:lastName/:firstName',
					controller: 'CandidateController',
					controllerAs: 'vm',
					templateUrl: 'app/candidate/candidate.html',
					resolve: {
						candidate: ['$stateParams', 'CandidateService', function($stateParams, CandidateService){
							return CandidateService.findCandidate($stateParams.firstName, $stateParams.lastName);
						}]
					}
				}
			}
		];
	}
})();