import {MY_WORK_BOARD} from '../action/types';

const initialState = {
  tech:"Hello",
  name:"Raj"
 };

export default (state=initialState, action) => {

    switch (action.type) {
      case "SET_TECHNOLOGY":
        return {
            ...state,
            tech: action.text
          };
      case MY_WORK_BOARD:
        return {
          ...state,
          mdata:action.mData
        }
        case "C":
        return {
          ...state,
          mdata2:action.mData
        }
      default:
        return state;
    }
  };