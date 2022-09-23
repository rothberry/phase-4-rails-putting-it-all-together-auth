class User < ApplicationRecord
  has_many :recipes
  has_many :students

  has_secure_password

  validates :username, presence: true, uniqueness: true

  def admin?
    return self.admin
  end
end
