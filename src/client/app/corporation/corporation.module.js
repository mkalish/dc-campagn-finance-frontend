(function(){
	'use strict';

	angular.module('app.corporation', []);

	angular
		.module('app.corporation')
		.run(appRun);

	appRun.$inject = ['routerHelper'];

	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}

	function getStates() {
		return [{
			state: 'corporation',
			config: {
				url: '/corporation/:name',
				controller: 'CorporationController',
				params: {
					corporation: {}
				},
				controllerAs: 'vm',
				templateUrl: 'app/corporation/corporation.html',
				resolve: {
					corporation: ['$stateParams', 'CorporationService', function($stateParams, CorporationService){
						return CorporationService.getInfoFor($stateParams.corporation);
					}]
				}
			}
		}]
	}
})();