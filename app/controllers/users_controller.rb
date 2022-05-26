class UsersController < ApplicationController
  def signup
    puts "SIGNING UP..."
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: new_user, status: 201
  end

  def me
    puts "ME>>>......."
    p session[:user_id]
    current_user = User.find(session[:user_id])
    render json: current_user
  end
  
  def show
    user = User.find(params[:id])
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :bio)
  end
end
