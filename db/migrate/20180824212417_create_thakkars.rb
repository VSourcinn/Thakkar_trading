class CreateThakkars < ActiveRecord::Migration[5.1]
  def change
    create_table :thakkars do |t|
       t.string :name
	  t.string :email
	  t.string :subject 
	  t.text   :message
	  t.string :contact 
      t.timestamps
    end
  end
end
