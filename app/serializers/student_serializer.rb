class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image_url, :age
  has_one :user
end
