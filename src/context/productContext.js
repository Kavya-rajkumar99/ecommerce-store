import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const ProductContextProvider = ({ children }) => {

  const getProducts = async (url) => {
    const response = await axios.get(url);
    console.log(response)
    const products = await response.data;
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={"Kavya"}>
      {children}
    </ProductContext.Provider>
  );
};

const useProviderContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvider, useProviderContext };
