class AddPolymorphicToPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :Poly_id, :integer
    add_index :photos, :Poly_id
    add_column :photos, :Poly_type, :string
    add_index :photos, :Poly_type
  end
end
