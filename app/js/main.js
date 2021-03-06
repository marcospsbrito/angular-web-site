(function () {

  var app = angular.module('PortifolioApp', ['ngRoute','ngResource']);

  app.config([ '$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: '/html/views/cards.html',
          controller: 'CardsController',
          controllerAs:'cardCtlr'
        }).when("/card/cadastro", {
          templateUrl: '/views/card-crud.html',
          controller: 'CardsController',
          controllerAs:'cardCtlr'
        })
        .when("/contato", {
          templateUrl: '/html/views/contact.html',
          controller: 'ContactController',
          controllerAs: 'contactCtlr'
        })
        .otherwise({
           redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
  ]);
})();
