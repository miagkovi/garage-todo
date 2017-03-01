class User < ActiveRecord::Base
  has_many :projects, -> { order(position: :asc) }
  has_many :tasks
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
