json.events @events do |event|
  json.id event.id
  json.date event.date
  json.location event.location
  json.location_privacy event.location_privacy
  json.slots event.slots
  json.host_id event.host_id
end