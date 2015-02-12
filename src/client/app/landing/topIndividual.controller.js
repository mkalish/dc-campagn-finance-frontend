(function(){
	'use strict';

	angular
		.module('app.landing')
		.controller('TopIndividualController', TopIndividualController);

	TopIndividualController.$inject = ['individualContributors'];

	function TopIndividualController(individualContributors) {
		var vm = this;
		vm.individualContributors = individualContributors;
	}

})();