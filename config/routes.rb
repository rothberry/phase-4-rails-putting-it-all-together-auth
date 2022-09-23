Rails.application.routes.draw do
  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :recipes, only: [:index, :create, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # for the student
  post "/signup_student", to: "students#create"
  get "/me_student", to: "students#show"
  post "/login_student", to: "sessions#login_student"
  delete "/logout_student", to: "sessions#logout_student"
end
