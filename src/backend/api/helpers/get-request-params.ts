export interface GetRequestParamsOptions {
  keyword: string | null;
  sort: string | null;
  page: number;
  limit: number;
}

export function getRequestParams(url: string): GetRequestParamsOptions {
  const { searchParams } = new URL(url);
  const keyword = searchParams.get("keyword") ?? null;
  const sort = searchParams.get("sort") ?? null;
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")!) : 0;
  const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : 10;

  return {
    keyword,
    sort,
    page,
    limit
  }
}