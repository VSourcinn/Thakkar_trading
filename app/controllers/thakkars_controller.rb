class ThakkarsController < ApplicationController

def index
@thakkar = Thakkar.new

@thakkars = Thakkar.all
end


def new


end


def create
	@thakkar = Thakkar.new(thakk_params)
    @thakkar.save
    redirect_to thakkars_path
end

def show


end

def edit

 
 end
 	def update
		
	end

	def destroy
		
		@thakkar.destroy
		redirect_to thakkars_path
	end
	private


def thakk_params
	params.require(:thakkar).permit(:name,:email,:message)
end


end

