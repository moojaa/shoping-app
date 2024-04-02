import { productActions } from "../reducers/productReducer"

function callProducts(searchQuery){
    return async(dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
        dispatch(productActions.getAllProduct({data}))
    }
}

function getDetail(id){
    return async (dispatch,getState) => {
    let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    // dispatch({type:"GET_DETAIL_PRODUCT",payload:{data}})
    dispatch(productActions.getDetail({data}))
  }}

export const productAction={callProducts,getDetail}