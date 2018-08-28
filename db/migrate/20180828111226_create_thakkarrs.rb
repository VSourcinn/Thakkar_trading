class CreateThakkarrs < ActiveRecord::Migration[5.1]
  def change
    create_table :thakkarrs do |t|

      t.timestamps
    end
  end
end
