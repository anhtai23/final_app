Rails.application.routes.draw do
  root 'home#index'
  
  resources :users
  resources :sessions, only: [:new, :create, :destroy ]
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  #-----------------POST---------------------------#
  post 'editProfile', to: 'users#editProfile'
  # get 'photo' , to: 'users#photo', as: 'photo'
  # get 'edit' , to: 'users#edit', as: 'edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end