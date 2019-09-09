import { CHANGE_LEFT, CHANGE_RIGHT } from "./actionTypes";
export const changeLeft = tech => ({
    type: CHANGE_LEFT,
    tech
});

export const changeRight = tech => ({
    type: CHANGE_RIGHT,
    tech
});
