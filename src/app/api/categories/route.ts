import { db } from "@backend";
import { generateResponse } from "@backend/api";
import { getRequestParams } from "@backend/api/helpers/get-request-params";
import { categories } from "@backend/db/schemas/categories";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { limit, page, keyword, sort } = getRequestParams(req.url); 
  const { searchParams } = new URL(req.url);
  const total = (await db.select().from(categories)).length;
  const totalPages = Math.ceil(total / limit);
  const data = await db.select().from(categories).limit(limit).offset(page);
  return generateResponse(data, { total, totalPages });
}