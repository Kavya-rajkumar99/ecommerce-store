import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/productReducer"

const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isProductLoading : false,
  isProductError : false,
  singleProduct : {}
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

  const getSingleProduct = async(url) => {
    try{
      dispatch({type : "SINGLE_PRODUCT_FETCH_REQUEST"})
      const response = await axios.get(url)
      const singleProduct = await response.data
      dispatch({type : "SINGLE_PRODUCT_FETCH_SUCCESS",payload : singleProduct})
    }
    catch(error){
      dispatch({type : "SINGLE_PRODUCT_FETCH_FAILURE"})
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state , getSingleProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvider, useProductContext };
