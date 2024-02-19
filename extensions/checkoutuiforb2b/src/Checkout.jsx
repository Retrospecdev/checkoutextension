
import React from "react";

import {
  Banner,
  reactExtension,
  
  usePurchasingCompany,
  
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => <App />);


export function App() {
  const purchasingCompany = usePurchasingCompany();

  // Check if there is a purchasing company
  if (purchasingCompany) {
    // If there is a purchasing company, it's a B2B checkout
    return (
      <div className="b2b">
        <div className="show">
          <Banner>B2B Checkout: Thank you for purchasing as a company!</Banner>
        </div>
        <div className="SECJK" style={{ display: "none" }}>
          <p>Dont need to show </p>
        </div>
      </div>
    );
  } else {
    // If there's no purchasing company, it's a D2C checkout
    return (
      <div>
        <Banner>D2C Checkout: Thank you for your purchase!</Banner>
      </div>
    );
  }
}


