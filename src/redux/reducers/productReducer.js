import { createSlice } from "@reduxjs/toolkit"

let initialState={
    productList:[],
    detailList:null
}

// function productReducer(state=initialState,action){
//     let {type,payload} = action
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return{...state,productList:payload.data}
//         default:
//             return{...state}
//     }

// }

// export default productReducer

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getAllProduct(state,action){
            state.productList = action.payload.data
        },
        getDetail(state,action){
            state.detailList = action.payload.data
        }
        
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer