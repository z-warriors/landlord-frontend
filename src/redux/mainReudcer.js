import { combineReducers } from "redux";
import authReducer from "../feature/Auth/authReducer";

const mainReducer = combineReducers({
    authentication: authReducer,
});
export default mainReducer;