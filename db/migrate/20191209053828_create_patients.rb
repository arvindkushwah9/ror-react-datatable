class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.date :date
      t.integer :number
      t.text :description

      t.timestamps
    end
  end
end
