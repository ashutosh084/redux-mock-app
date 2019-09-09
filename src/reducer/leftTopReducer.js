import { CHANGE_LEFT_TOP } from "../action/actionTypes";

const initialState = {
    tech: "Hello"
};

const leftTopReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LEFT_TOP:
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
};

export default leftTopReducer;
