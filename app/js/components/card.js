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
