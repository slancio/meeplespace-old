;(function () {
  "use strict";

  var App = Backbone.Marionette.Application.extend({

  });
  
  window.MeepleSpace = new App();

  MeepleSpace.on('start', function () {
    Backbone.history.start();
  });

})();