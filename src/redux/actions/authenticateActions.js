import { authenticateActions } from "../reducers/authenticateReducer"

function login(id,password) {
    return (dispatch, getState) => {
        // dispatch({type:"LOGIN_SUCCESS",payload:{id,password}})
        dispatch(authenticateActions.login({id,password}))
    }
}

function logout(){
    return(dispatch,getState)=>{
        // dispatch({type:"LOG_OUT",payload:false})
        dispatch(authenticateActions.logout())
    }
}

export const authenticateAction = { login,logout }