Rails.application.routes.draw do
  
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'home#index'

  resources :projects do
    collection { post :sort }

    resources :tasks do
      collection { post :sort }
      member do
        post 'status'
      end
    end
  end
  
  devise_for :users, :controllers => { :registrations => "registrations" }
  
end
