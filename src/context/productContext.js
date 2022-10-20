import { createContext, useContext } from "react";

const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    return <ProductContext.Provider value={"Kavya"}>{children}</ProductContext.Provider>
}

const useProviderContext = () =>{
    return useContext(ProductContext)
}

export {ProductContextProvider,useProviderContext}