class RecipesController < ApplicationController
  
  def index
    render json: Recipe.all
  end

  def create
    recipe = @current_user.recipes.create!(recipe_params)
    render json: recipe, status: :created
  end

  def destroy
    # as an admin, I can delete anyone's recipes
    if @current_user.admin?
      recipe = Recipe.find(params[:id])
    else
      render json: {error: "Not Admin yo"}, status: 401
    end
  end

  private

  def recipe_params
    params.permit(:title, :instructions, :minutes_to_complete)
  end

end
