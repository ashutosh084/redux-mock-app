import { CHANGE_RIGHT_DOWN } from "../action/actionTypes";

const initialState = {
    tech: "Hello"
};

const rightDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_RIGHT_DOWN:
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
};

export default rightDownReducer;
