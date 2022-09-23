# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting..."
User.destroy_all
Recipe.destroy_all

puts "Creating users..."
u1 = User.create(username: "sharkboy13", password: "123", image_url: Faker::Avatar.image, bio: Faker::Hipster.sentence, admin: true)
u2 = User.create(username: "chauncy", password: "123", image_url: Faker::Avatar.image, bio: Faker::Hipster.sentence)
u3 = User.create(username: "ben", password: "123", image_url: Faker::Avatar.image, bio: Faker::Hipster.sentence)

puts "Creating Recipes..."
u1.recipes.create(title: Faker::Restaurant.name, instructions: Faker::Restaurant.description, minutes_to_complete: 1)
u1.recipes.create(title: Faker::Restaurant.name, instructions: Faker::Restaurant.description, minutes_to_complete: 3)
u2.recipes.create(title: Faker::Restaurant.name, instructions: Faker::Restaurant.description, minutes_to_complete: 100)

puts "Creating Students..."

u1.students.create(username: "sbob", password: "123", image_url: Faker::Avatar.image, age: rand(21..100))
u1.students.create(username: "mandy", password: "123", image_url: Faker::Avatar.image, age: rand(21..100))
u1.students.create(username: "lol", password: "123", image_url: Faker::Avatar.image, age: rand(21..100))

puts "DONE!"
