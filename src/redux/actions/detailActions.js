function getDetail(id){
    return async (dispatch,getState) => {
    let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    dispatch({type:"GET_DETAIL_PRODUCT",payload:{data}})
    // setDetailList(data)
  }}

  export const detailAction={getDetail}