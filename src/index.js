import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductContextProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filterContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
     <App />
     </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

reportWebVitals();
