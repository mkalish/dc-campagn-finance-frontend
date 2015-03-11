(function(){
	'use strict';

	angular
		.module('app.corporation')
		.controller('CorporationController', controllerImpl);

	controllerImpl.$inject = ['corporation'];

	function controllerImpl(corporation) {
		var vm = this;
		vm.corporation = corporation.company;
	}
})();