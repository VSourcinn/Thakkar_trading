class ThakkarsController < ApplicationController

def index
@thakkar = Thakkar.new

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
 @thakkar = Thakkar.find(params[:id])
 
 end
 	def update
		@thakkar = Thakkar.find(params[:id])
		if @thakkar.update(thakk_params)
		   redirect_to thakkars_path
		else
			render 'edit'
		end
	end

	def destroy
		
		@thakkar.destroy
		redirect_to thakkars_path
	end
	private


def thakk_params
	params.require(:thakkar).permit(:name,:email,:message,:contact)
end


end

