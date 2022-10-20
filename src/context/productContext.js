import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    try {
      dispatch ({type : "PRODUCTS_FETCH_REQUEST"})
      const response = await axios.get(url);
      const products = await response.data;
      dispatch ({type : "PRODUCTS_FETCH_SUCCESS",payload : products })
    } catch (error) {
        dispatch ({type : "PRODUCTS_FETCH_FAILURE"})
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProviderContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvider, useProviderContext };
