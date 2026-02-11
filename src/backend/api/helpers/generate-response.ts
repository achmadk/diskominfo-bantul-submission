import { NextResponse } from "next/server";
import { BaseResponse } from "../types";
import { GetRequestParamsOptions } from "./get-request-params";

export interface GenerateResponseOptions extends GetRequestParamsOptions {
  message: string;
  status: number;
  total: number;
  totalPages: number;
}

export function generateResponse<
  Data = unknown,
  ReturnType extends BaseResponse<Data> = BaseResponse<Data>,
  Options extends GenerateResponseOptions = GenerateResponseOptions
>(data: Data, options?: Options) {
  const message = options?.message ?? "success";
  const status = options?.status ?? 200;
  const keyword = options?.keyword ?? null;
  const sort = options?.sort ?? null;
  const page = options?.page ?? 1;
  const limit = options?.limit ?? 10;
  const total = options?.total ?? 0;
  const totalPages = options?.totalPages ?? 0;

  const body = {
    message,
    status,
    data,
    meta: {
        pagination: {
            page,
            limit,
            total,
            total_pages: totalPages,
        },
        sort,
        keyword,
    }
  } as ReturnType;
  return NextResponse.json(body, { status });
}