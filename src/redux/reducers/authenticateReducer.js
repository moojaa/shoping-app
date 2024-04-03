import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    id: '',
    password: '',
    authenticate: false
}

// function authenticateReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "LOGIN_SUCCESS":
//             return {
//                 ...state,
//                 id: payload.id,
//                 password: payload.password,
//                 authenticate: true
//             }

//         case "LOG_OUT":
//             return {
//                 ...state,
//                 authenticate: false
//             }

//         default:
//             return { ...state }
//     }
// }

// export default authenticateReducer

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.id = action.payload.id
            state.password = action.payload.password
            state.authenticate = true
        },
        logout(state,action){
            state.id = ''
            state.password =''
            state.authenticate = false
        }
    }
})

export const authenticateActions = authSlice.actions
export default authSlice.reducer