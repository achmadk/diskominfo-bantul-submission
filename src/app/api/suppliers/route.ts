import { db } from "@backend";
import { generateResponse } from "@backend/api";
import { getRequestParams } from "@backend/api/helpers/get-request-params";
import { products } from "@backend/db/schemas/products";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { limit, page, keyword, sort } = getRequestParams(req.url); 
  const { searchParams } = new URL(req.url);
  const data = await db.select().from(products).limit(limit).offset(page);
  return generateResponse(data);
}