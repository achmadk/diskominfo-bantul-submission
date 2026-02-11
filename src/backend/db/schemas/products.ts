import { char, smallint, pgTable, real, integer } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  product_id: smallint().primaryKey(),
  product_name: char(),
  supplier_id: smallint(),
  category_id: smallint(),
  quantity_per_unit: char(),
  unit_price: real(),
  units_in_stock: smallint(),
  units_on_order: smallint(),
  reorder_level: smallint(),
  discontinued: integer()
})