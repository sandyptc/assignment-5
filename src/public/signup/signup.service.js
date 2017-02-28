(function() {
"use strict";
	
angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http'];
function SignUpService($http) {
	var service = this;
	var user = {};
	
	var baseUrl = 'http://still-crag-33074.herokuapp.com/';
	service.validateMenu = function(user) {
		this.user = user;
		var response =	$http({
				method: 'GET',
				url: baseUrl + user.menu + '.json'
			});
			
		return response;
	};
	
	service.getUser= function() {
		return this.user;
	}
}
	
})();