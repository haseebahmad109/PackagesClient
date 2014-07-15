(function() {
  var init, module;

  module = angular.module('packages', ['controllers', 'models', 'services']);

  module.constant('API_URL', 'http://localhost:3000');

  module.constant('WS_URL', 'ws://localhost:7000');


  module.config([
    '$routeProvider', '$httpProvider', '$sceDelegateProvider', function($routeProvider, $httpProvider, $sceDelegateProvider) {
      // these are used for cross domain request
	  $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost:8000/**'
      ]);

      $routeProvider.when('/help'
        , {
          templateUrl: 'views/help.html'
          , controller: 'HelpController'
      });
      
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }
  ]);

  module.run([
    '$rootScope', function($rootScope, WS_URL) {

    }
  ]);

  init = function() {
    return angular.bootstrap(document, ['packages']);
  };

  if (window.cordova) {
    document.addEventListener('deviceready', init, false);
  } else {
    angular.element(document).ready(init);
  }

}).call(this);
