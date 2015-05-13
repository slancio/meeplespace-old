# == Schema Information
#
# Table name: events
#
#  id               :integer          not null, primary key
#  date             :date             not null
#  location         :string           not null
#  location_privacy :boolean          default(FALSE), not null
#  slots            :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  host_id          :integer          not null
#

class Event < ActiveRecord::Base
end
