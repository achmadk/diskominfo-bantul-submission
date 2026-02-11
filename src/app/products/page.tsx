"use client";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import { Typography } from "@mui/material";
import React from "react";

export default function BlogPostList() {
  const { result, dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  // const {
  //   result: { data: categories },
  //   query: { isLoading: categoryIsLoading },
  // } = useMany({
  //   resource: "categories",
  //   ids:
  //     result?.data?.map((item: any) => item?.category?.id).filter(Boolean) ??
  //     [],
  //   queryOptions: {
  //     enabled: !!result?.data,
  //   },
  // });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "product_name",
        headerName: "Product Name",
        flex: 1.5,
        align: "left",
        headerAlign: "left",
      },
      {
        field: "category_id",
        headerName: "Category",
        display: "flex",
      },
      {
        field: "supplier_id",
        headerName: "Supplier",
        display: "flex",
      },
      {
        field: "unit_price",
        headerName: "Price",
        display: "flex",
        align: "right",
        renderCell: ({ value }) => <Typography>{`$ ${value}`}</Typography>,
      },
      {
        field: "units_in_stock",
        headerName: "Stock",
        display: "flex",
        align: "right"
      },
      {
        field: "actions",
        headerName: "Actions",
        align: "left",
        headerAlign: "left",
        minWidth: 120,
        sortable: false,
        display: "flex",
        renderCell: function render({ row }) {
          return (
            <ShowButton hideText recordItemId={row.product_id} />
          );
        },
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        rows={(dataGridProps?.rows as any)?.data ?? []}
        getRowId={(row) => row.product_id}
      />
    </List>
  );
}
