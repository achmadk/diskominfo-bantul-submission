import { defineRelations } from "drizzle-orm"
import { products } from "./schemas/products"
import { suppliers } from "./schemas/suppliers"

export const relations = defineRelations({
  products,
  suppliers
}, (relation) => ({
  products: {
    supplier: relation.one.suppliers({
      from: relation.products.product_id,
      to: relation.suppliers.supplier_id
    })
  }
}))