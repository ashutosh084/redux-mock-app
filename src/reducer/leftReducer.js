import { CHANGE_LEFT } from "../action/actionTypes";

const initialState = {
    tech: "Hello"
};

const leftReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LEFT:
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
};

export default leftReducer;
