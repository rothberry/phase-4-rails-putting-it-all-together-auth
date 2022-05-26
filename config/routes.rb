Rails.application.routes.draw do
  resources :recipes, only: [:create, :index]
  # resources :users, only: [:create => signup]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "users#me"
  post "/signup", to: "users#signup"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
end
