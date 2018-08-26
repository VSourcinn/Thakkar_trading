class ThcontactsController < ApplicationController
def index

	@thakkars = Thakkar.all
end
end
