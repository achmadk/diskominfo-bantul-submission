import { char, pgTable, smallint, text } from "drizzle-orm/pg-core";

export const suppliers = pgTable("suppliers", {
  supplier_id: smallint().primaryKey(),
  company_name: char({ length: 40 }),
  contact_name: char({ length: 30 }),
  contact_title: char({ length: 30 }),
  address: char({ length: 60 }),
  city: char({ length: 15 }),
  region: char({ length: 15 }),
  postal_code: char({ length: 10 }),
  country: char({ length: 15 }),
  phone: char({ length: 24 }),
  fax: char({ length: 24 }),
  homepage: text(),
})