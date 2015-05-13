Meeplespace.Routers.MeeplespaceRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._userCollection = new Meeplespace.Collections.Users();
    this._userCollection.fetch();
  },

  routers: {
    "": "index"
  },

  index: function () {
    var indexView = new Meeplespace.Views.UsersIndex({
      collection: this._userCollection
    });
    // render the view somewhere
  },

  new: function () {
    if (!this._requireSignedOut()) { return; }

    var model = new this._userCollection.model();
    var formView = new Meeplespace.Views.UsersForm({
      collection: this._userCollection,
      model: model
    });

    // render the view somewhere
  },

  show: function (id) {
    var model = this._userCollection.getOrFetch(id);
    var showView = new Meeplespace.Views.UsersShow({
      model: model
    });
    // render the view somewhere
  },

  signIn: function (callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new Meeplespace.Views.SignIn({ callback: callback });
    // do stuff - figure out how/where you want to render these views
    
  },

  _requireSignedIn: function (callback) {
    if (!Meeplespace.currentUser.isSigned()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);

      return false;
    }

    return true;
  },

  _requireSignedOut: function (callback) {
    if (Meeplespace.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();

      return false;
    }

    return true;
  },

  _goHome: function () {
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});