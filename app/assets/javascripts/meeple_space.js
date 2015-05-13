;(function () {
  "use strict";

  var App = Backbone.Marionette.Application.extend({
    setRootLayout: function () {
      this.rootView =  new MeepleSpace.RootView();
    }
  });
  
  window.MeepleSpace = new App();

  MeepleSpace.RootView = Backbone.Marionette.LayoutView.extend({
    el: 'body',
    regions: {
      header: '.header',
      nav: '.nav',
      footer: '.footer'
    }
  });

  MeepleSpace.NavView = Backbone.Marionette.ItemView.extend({

    ui: {
      nav: '.nav'
    },

  });

  MeepleSpace.Controller = Backbone.Marionette.Controller.extend({
    initialize: function () {

    },

    start: function () {

    },

    homeRoute: function () {
      console.log("test");
      var _template = 'WHAT!?';
      var testView = new MeepleSpace.NavView({ template: _.template(_template)});
      MeepleSpace.rootView.showChildView('.header', testView);
    }

  });

  MeepleSpace.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      "": "homeRoute"
    }
  });

  MeepleSpace.on('before:start', function () {
    MeepleSpace.setRootLayout();
  });

  MeepleSpace.on('start', function () {
    MeepleSpace._controller = new MeepleSpace.Controller();
    MeepleSpace._router = new MeepleSpace.Router({ controller: MeepleSpace._controller });
    
    MeepleSpace._controller.start();
    Backbone.history.start();
  });

  MeepleSpace.start();
})();