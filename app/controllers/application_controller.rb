class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session, if: ->{request.format.json?}

  def vue
    render 'layouts/application'
  end
end
