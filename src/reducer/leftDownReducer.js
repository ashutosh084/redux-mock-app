import { CHANGE_LEFT_DOWN } from "../action/actionTypes";

const initialState = {
    tech: "Hello"
};

const leftDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LEFT_DOWN:
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
};

export default leftDownReducer;
