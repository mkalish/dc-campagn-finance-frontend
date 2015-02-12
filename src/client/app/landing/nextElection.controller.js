(function(){
	'use strict';

	angular
		.module('app.landing')
		.controller('NextElectionController', NextElectionController);

	NextElectionController.$inject = ['next'];

	function NextElectionController(next){
		var vm = this;
		console.log(next);
		vm.nextElection = next.nextElection;
	}
})();