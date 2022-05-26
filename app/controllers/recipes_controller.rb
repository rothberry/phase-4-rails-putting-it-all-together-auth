class RecipesController < ApplicationController
  def index
    current_user = User.find(session[:user_id])
    render json: current_user.recipes
  end

  def create
    # debugger
    current_user = User.find(session[:user_id])
    new_recipe = current_user.recipes.create(recipe_params)
    render json: new_recipe, status: 201
  end

  private

  def recipe_params
    params.permit(:title, :instructions, :minutes_to_complete)
  end
end
