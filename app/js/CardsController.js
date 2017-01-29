angular.
  module('PortifolioApp').controller('CardsController', function($scope) {
      var ctrl = this;
      ctrl.cards = [{
        image:'images/example-work01.jpg',
        title:'Teste 01',
        content:'asdfuashdfa sadfh uasdf asuhdf asdfh uasdf',
        link:'teste'
      },
      {
        image:'images/example-work07.jpg',
        title:'Teste 02',
        content:'asdfuashdfa sadfh ua asdfsdf asuhdf asdfh uasdf',
        link:'teste 2'
      }];

      var _adicionarCard = function (){
        ctrl.cards.push(angular.copy($scope.cardForm));
        delete($scope.cardForm);
      }

      this.adicionarCard = _adicionarCard;
    });
