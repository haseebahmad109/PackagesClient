(function() {
  var module;

  module = angular.module('controllers', ['directives', 'models', 'services']);

  module.controller('HelpController', [
    '$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

      $scope.help = "Hello This is Help"
    }
  ]);

}).call(this);
