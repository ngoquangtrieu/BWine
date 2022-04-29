import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/scssIndex/index.scss";
import { BrowserRouter } from "react-router-dom";
import { AgeProvider } from "./context/AgeContext";
import App from "./App";
import { EmailProvider } from "./context/EmailContext";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-ylkpd9u8.us.auth0.com"
      clientId="q5tnjz4MxpS5UR2Aa8NAjXgyX6zdhPWO"
      redirectUri={window.location.origin}
    >
      <UserProvider>
        <AgeProvider>
          <EmailProvider>
            <ProductsProvider>
              <CartProvider>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              </CartProvider>
            </ProductsProvider>
          </EmailProvider>
        </AgeProvider>
      </UserProvider>
    </Auth0Provider>
  </BrowserRouter>
);
