class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :login_student]

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      session[:expire_after] = Time.current + 1.minutes
      p session
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    # debugger
    session.delete :user_id
    session.delete :student_id
    head :no_content
  end

  def login_student
    student = Student.find_by(username: params[:username])
    if student&.authenticate(params[:password])
      session[:student_id] = student.id
      render json: student
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end
end
