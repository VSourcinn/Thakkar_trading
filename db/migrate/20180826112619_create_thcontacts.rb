class CreateThcontacts < ActiveRecord::Migration[5.1]
  def change
    create_table :thcontacts do |t|

      t.timestamps
    end
  end
end
