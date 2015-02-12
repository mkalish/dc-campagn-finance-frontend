(function(){
	'use strict';

	angular
		.module('app.candidate')
		.controller('CandidateController', CandidateController);

	CandidateController.$inject = ['candidate'];

	function CandidateController(candidate){
		var vm = this;
		vm.candidate = candidate;
	}
})();