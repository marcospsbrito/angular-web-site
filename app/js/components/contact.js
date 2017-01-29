angular.
  module('PortifolioApp').component('contact', {
  templateUrl: 'partials/contact_template.html',
  controller: ContactController,
  bindings: {
    card: '='
  }
});
