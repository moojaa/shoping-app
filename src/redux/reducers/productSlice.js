import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
    productList: [],
    detailList: null,
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchAll',
    async (searchQuery, thunkApi) => {
        try {
            let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products?q=${searchQuery}`
            let response = await fetch(url)
            return await response.json()
        } catch (error) {
            thunkApi.rejectWithValue(error.massage)
        }
    })
export const fetchDetail = createAsyncThunk('product/fetchDetail',
    async(id,thunkApi)=>{
        try{
            let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products/${id}`
            let response = await fetch(url)
            return await response.json()
        }catch(error){
            thunkApi.rejectWithValue(error.massage)
        }
    })
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
    name: "product",
    initialState,
    reducers: {
        // getAllProduct(state,action){
        //     state.productList = action.payload.data
        // },
        // getDetail(state, action) {
        //     state.detailList = action.payload.data
        // }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productList = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
        builder.addCase(fetchDetail.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(fetchDetail.fulfilled,(state,action)=>{
                state.isLoading = false
                state.detailList = action.payload
            })
            .addCase(fetchDetail.rejected,(state,action)=>{
                state.isLoading =false
                state.error = action.payload
            })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer