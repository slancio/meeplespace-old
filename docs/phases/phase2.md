# Phase 2: Creating Events

## Rails
### Models

### Controllers
Api::UsersController (create, destroy, index, show)
Api::EventsController (create, destroy, index, show)

### Views
* users/show.json.jbuilder
* events/show.json.jbuilder

## Backbone
### Models
* Event
* User

### Collections
* Events
* Users

### Views
* EventForm
* EventShow (composite view, will contain EventLocation & EventGame subviews in Phase 4)
* CityEventShow (composite view, contains EventIndex subview)
* EventIndex (composite view, contains EventIndexItem subviews)
* EventIndexItem


## Gems/Libraries
