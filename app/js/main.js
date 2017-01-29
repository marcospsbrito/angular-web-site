(function () {

  var app = angular.module('PortifolioApp', ['ngRoute']);

  app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: '/partials/card_template.html',
          controller: 'CardController',
          controllerAs:'cardCtlr'
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);
})();
