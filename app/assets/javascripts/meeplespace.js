window.Meeplespace = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.currentUser = new Meeplespace.Models.CurrentUser();
    this.currentUser.fetch();
    
  }
};

$(document).ready(function(){
  Meeplespace.initialize();
});