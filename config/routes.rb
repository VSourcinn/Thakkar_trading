Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: "thakkars#index"
  resources :thakkars
  resources :thcontacts
  resources :thakkarrs
end
