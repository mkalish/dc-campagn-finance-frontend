(function(){
	'use strict';

	angular
		.module('app.contributor')
		.directive('dcfContributorRow', directiveImpl);

	directiveImpl.$inject = [];

	function directiveImpl(){
		return {
			restrict: 'E',
			templateUrl: 'app/contributor/dcfContributorRow.html',
			scope: {
				contributor: "=contributor"
			}
		}
	}
})();