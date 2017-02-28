(function() {
"use strict"

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['$scope','SignUpService'];
function InfoController($scope, SignUpService) {
    $scope.user = SignUpService.getUser();
}

})();