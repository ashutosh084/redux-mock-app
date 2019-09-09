import left from "./leftReducer";
import right from "./rightReducer";
import { combineReducers } from "redux";

export default combineReducers({
    left: left,
    right: right
});
