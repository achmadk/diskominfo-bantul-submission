export interface BaseResponse<Data = unknown> {
  message: string;
  status: number;
  data: Data;
  meta: {
    pagination: {
        page: number;
        limit: number;
        total: number;
        total_pages: number;
    }
    keyword: string | null;
    sort: string | null;
  }
}