angular.
  module('PortifolioApp').controller('CardsController', function(PapirotecService, $scope) {
      var ctrl = this;

    var _listCards = PapirotecService.listCards(function(cards){
        ctrl.cards = cards;
      });

      var _adicionarCard = function (){
        PapirotecService.insertCard($scope.cardForm);
      };

      this.adicionarCard = _adicionarCard;
      this.listCards = _listCards;
    });
