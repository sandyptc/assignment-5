(function() {
"use strict";
	
angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope','SignUpService'];
function SignUpController($scope, SignUpService) {
	$scope.master = {};
	 
	$scope.update = function(user) {
		console.log('Scope udated');
		var promise = SignUpService.validateMenu(user);		
		promise.then(
			function(response) {
				 $scope.errorMessage = '';
				 user.name = response.data.name;
				 user.description = response.data.description;
				 user.category_short_name = response.data.category_short_name;
				 $scope.successMessage = 'Your information has been saved';
			}, 
			function(response) {
				 $scope.errorMessage = 'No such menu number exists';
				 user.name = '';
				 user.description = '';
				 user.category_short_name = '';
				 $scope.successMessage = '';
			});
	}

	$scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
}
	
})();