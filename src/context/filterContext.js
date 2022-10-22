import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
    filteredProducts : [],
    allProducts : []
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        dispatch({type : "FILTER_PRODUCTS_REQUEST",payload : products})
      }, [products])
    
    return <FilterContext.Provider value={{...state}}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterContextProvider,useFilterContext}