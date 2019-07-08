class Photo < ApplicationRecord
	belongs_to :Poly , polymorphic: true 
end
