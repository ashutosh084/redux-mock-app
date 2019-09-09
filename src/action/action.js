import {
    CHANGE_LEFT_TOP,
    CHANGE_LEFT_DOWN,
    CHANGE_RIGHT_TOP,
    CHANGE_RIGHT_DOWN
} from "./actionTypes";
export const changeLeftTop = tech => ({
    type: CHANGE_LEFT_TOP,
    tech
});

export const changeLeftDown = tech => ({
    type: CHANGE_LEFT_DOWN,
    tech
});

export const changeRightTop = tech => ({
    type: CHANGE_RIGHT_TOP,
    tech
});

export const changeRightDown = tech => ({
    type: CHANGE_RIGHT_DOWN,
    tech
});
