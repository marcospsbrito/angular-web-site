function CardController(){

}
angular.
  module('PortifolioApp').component('card', {
  templateUrl: 'partials/card_template.html',
  controller: CardController,
  bindings: {
    card: '='
  }
});

angular.
  module('PortifolioApp').controller('CardsController', function() {
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
    });
