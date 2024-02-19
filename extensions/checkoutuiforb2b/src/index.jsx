import React from "react";
import { Banner,	BlockStack, usePurchasingCompany } from "@shopify/ui-extensions-react/checkout";

export function App() {
  const purchasingCompany = usePurchasingCompany(); // Assuming usePurchasingCompany is a custom hook

  if (!purchasingCompany) {
    return null;
  }

  const title = 'Holiday impacts on draft orders';
  const message = 'YourMessage'; // Assuming message is defined somewhere

  return (
    <Banner  title={title}>{message}</Banner>
  );
}
