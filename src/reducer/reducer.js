import leftTop from "./leftTopReducer";
import leftDown from "./leftDownReducer";
import rightTop from "./rightTopReducer";
import rightDown from "./rightDownReducer";
import { combineReducers } from "redux";

export default combineReducers({
    leftTop: leftTop,
    leftDown: leftDown,
    rightTop: rightTop,
    rightDown: rightDown
});
