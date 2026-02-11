import React from "react";
import { ThemedLayout } from "@refinedev/mui";
import { Header } from "@components/header";

export default async function Layout({ children }: React.PropsWithChildren) {
  return <ThemedLayout Header={Header}>{children}</ThemedLayout>;
}
