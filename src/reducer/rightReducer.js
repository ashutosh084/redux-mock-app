import { CHANGE_RIGHT } from "../action/actionTypes";

const initialState = {
    tech: "Hello"
};

const rightReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_RIGHT:
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
};

export default rightReducer;
