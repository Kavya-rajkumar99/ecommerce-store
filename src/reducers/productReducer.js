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
    default : return state
   }
}

export default productReducer