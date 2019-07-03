class Photo < ApplicationRecord
	belongs_to :Poly , polymorphic:key => "value",  true 
end
