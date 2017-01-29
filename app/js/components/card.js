function CardController(){

}
angular.
  module('PortifolioApp').component('card', {
  templateUrl: '/html/components/card_template.html',
  controller: CardController,
  bindings: {
    card: '='
  }
});
