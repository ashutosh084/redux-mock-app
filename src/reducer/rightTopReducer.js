import { CHANGE_RIGHT_TOP } from "../action/actionTypes";

const initialState = {
    tech: "Hello"
};

const rightTopReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_RIGHT_TOP:
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
};

export default rightTopReducer;
