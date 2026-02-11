import { bytea, char, pgTable, smallint, text } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  category_id: smallint().primaryKey(),
  category_name: char({ length: 15 }),
  description: text(),
  picture: bytea(),
})