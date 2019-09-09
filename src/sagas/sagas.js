import { call, takeEvery, put } from "redux-saga/effects";
import { CHANGE_RIGHT_TOP } from "../action/actionTypes";
import { CHANGE_RIGHT_DOWN } from "../action/actionTypes";

function* saga(intent) {
    yield console.log("caught in middleware with intent :", JSON.stringify(intent));
    yield put({ type: intent.type === CHANGE_RIGHT_TOP ? CHANGE_RIGHT_DOWN : CHANGE_RIGHT_TOP, tech: intent.tech })
};
export default function* rootSaga() {
    yield call(() => console.log("saga middleware"));
    yield takeEvery(CHANGE_RIGHT_TOP, saga);
    yield takeEvery(CHANGE_RIGHT_DOWN, intent => {
        console.log("caught in middleware with intent :", JSON.stringify(intent));
    })
}
