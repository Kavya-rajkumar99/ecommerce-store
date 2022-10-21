const productReducer = (state,action) =>{
   switch(action.type){
    case "PRODUCTS_FETCH_REQUEST" : return {
        ...state,
        isLoading : true
    }
    case "PRODUCTS_FETCH_SUCCESS" : 
     const featuredProducts = action.payload.filter((product)=>product.featured)
    return {
        ...state,
        isLoading : false,
        products : action.payload,
        featuredProducts 
    }
    case "PRODUCTS_FETCH_FAILURE" : return {
        ...state,
        isLoading : false,
        isError : true
    }
    case "SINGLE_PRODUCT_FETCH_REQUEST" : return {
        ...state,
        isProductLoading : true
    }
    case "SINGLE_PRODUCT_FETCH_SUCCESS" : return {
        ...state,
        isProductLoading : false,
        singleProduct : action.payload
    }
    case "SINGLE_PRODUCT_FETCH_FAILURE" : return {
        ...state,
        isProductLoading : false,
        isProductError : true
    }
    
    default : return state
   }
}

export default productReducer