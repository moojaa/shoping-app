import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import detailReducer from "./detailReducer";


export default combineReducers({
    auth:authenticateReducer,
    product:productReducer,
    detail:detailReducer
})