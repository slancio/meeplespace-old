Rails.application.routes.draw do
  root to: 'static_pages#root'

  # resources :users
  # resource :session

  namespace :api, defaults: { format: :json } do
    resources :events, except: [:new, :edit]
    resources :users, except: [:new, :edit]
    resource :session, only: [:show, :create, :destroy]
  end
end
