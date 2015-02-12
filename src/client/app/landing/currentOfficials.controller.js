(function(){
	'use strict';

	angular
		.module('app.landing')
		.controller('CurrentOfficialsController', CurrentOfficialsController);

	CurrentOfficialsController.$inject = ['officials'];

	function CurrentOfficialsController(officials){
		var vm = this;
		vm.officials = officials;
	}
})();