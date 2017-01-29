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
          templateUrl: '/views/cards.html',
          controller: 'CardsController',
          controllerAs:'cardCtlr'
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);
})();
