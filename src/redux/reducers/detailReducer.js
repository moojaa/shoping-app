let initialState={
    detailList:[]
}

function detailReducer(state=initialState,action){
    let {type,payload} = action
    switch(type){
        case "GET_DETAIL_PRODUCT":
            return{...state,detailList:payload.data}
        default:
            return{...state}
    }
}

export default detailReducer