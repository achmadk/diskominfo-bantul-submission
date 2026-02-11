import { db } from "@backend";
import { generateResponse } from "@backend/api";
import { getRequestParams } from "@backend/api/helpers/get-request-params";
import { categories } from "@backend/db/schemas/categories";
import { products } from "@backend/db/schemas/products";
import { suppliers } from "@backend/db/schemas/suppliers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { limit, page, keyword, sort } = getRequestParams(req.url); 
  const { searchParams } = new URL(req.url);
  const total = (await db.select().from(products)).length;
  const totalPages = Math.ceil(total / limit);
  const initialData = await db.select().from(products).limit(limit).offset(page);
  const suppliersData = await db.select().from(suppliers);
  const categoriesData = await db.select().from(categories);
  const data = initialData.map((item) => ({
    ...item,
    supplier_name: suppliersData.find((supplier) => supplier.supplier_id === item.supplier_id)?.company_name ?? null,
    category_name: categoriesData.find((category) => category.category_id === item.category_id)?.category_name ?? null,
  }))
  return generateResponse(data, { total, totalPages });
}