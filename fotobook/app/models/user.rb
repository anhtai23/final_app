class User < ApplicationRecord
  has_secure_password 

  has_many  :photos ,as: :Poly 
  has_many  :albums
  validates :email, presence: true, uniqueness: true
end
