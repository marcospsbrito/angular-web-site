(function () {

'use strict';


  angular.module('PortifolioApp', ['ngRoute'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: './partials/card.html',
          controller: 'CardController',
          controllerAs: 'cardCtrl'
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('PortifolioApp')

  .controller('CardController', function() {
      this.cards = [{
        image:'/app/images/example-blog01.jpg',
        title:'Teste 01',
        content:'asdfuashdfa sadfh uasdf asuhdf asdfh uasdf',
        link:'teste'
      },
      {
        image:'/app/images/example-blog02.jpg',
        title:'Teste 02',
        content:'asdfuashdfa sadfh uasdf asuhasfd df asdfh uasdf',
        link:'teste'
      }];
      console.log(this.cards);
    });

}());
