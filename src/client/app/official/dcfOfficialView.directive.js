(function(){
	'use strict';

	angular
		.module('app.official')
		.directive('dcfOfficialView', dcfOfficialViewImpl);

	dcfOfficialViewImpl.$inject = [];

	function dcfOfficialViewImpl(){
		return {
			restrict: 'E',
			scope: {
				official: '=official'
			},
			templateUrl: 'app/official/dcfOfficialView.html'
		};
	}
})();