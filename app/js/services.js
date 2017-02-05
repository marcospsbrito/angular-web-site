function PapirotecService($resource){
  var Card = $resource('http://104.197.90.149:3000/api/cards/:cardId',{cardId:'@cardId'},
    {query: {method: 'get', isArray: true}});

  var _insertCard = function(card){
    Card.save(card);
  };

  var _listCards = function(callback){
    Card.query(callback);
  };

  return {
    insertCard:_insertCard,
    listCards:_listCards
  };
}

angular.module('PortifolioApp').factory('PapirotecService', PapirotecService);
