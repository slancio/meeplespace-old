# Phase 2: Creating Events

## Rails
### Models
* Event
* Game

### Controllers

Api::UsersController (create, destroy, index, show)
Api::EventsController (create, destroy, index, edit, update, show)
Api::GameController (create, show)

### Views
* users/show.json.jbuilder
* events/show.json.jbuilder
* game/show.json.jbuilder

## Backbone
### Models
* Event
* User
* Game

### Collections
* Events
* Users
* Games

### Views
* (Make all of these Marionette Views)
* EventForm
* EventShow (composite view, will contain EventLocation & EventGame subviews in Phase 4)
* CityEventShow (composite view, contains EventIndex subview)
* EventIndex (composite view, contains EventIndexItem subviews)
* EventIndexItem
* GameShow


## Gems/Libraries
backbone-on-rails
marionette-rails