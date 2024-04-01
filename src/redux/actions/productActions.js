function callProducts(searchQuery){
    return async(dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
        // setProductList(data)
    }
}

export const productAction={callProducts}