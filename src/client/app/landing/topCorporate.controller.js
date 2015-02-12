(function(){
	'use strict';

	angular
		.module('app.landing')
		.controller('TopCorporateController', TopCorporateController);

	TopCorporateController.$inject = ['corporateContributors'];

	function TopCorporateController(corporateContributors) {
		var vm = this;
		vm.corporateContributors = corporateContributors;
	}
	
})();