import { call, takeEvery } from "redux-saga/effects";
export default function* rootSaga() {
    yield call(() => console.log("saga middleware"));
    yield takeEvery("INCREMENT", intent =>
        console.log(
            "INCREMENT caught in middleware with intent :",
            JSON.stringify(intent)
        )
    );
    yield takeEvery("DECREMENT", intent =>
        console.log(
            "DECREMENT caught in middleware with intent :",
            JSON.stringify(intent)
        )
    );
    yield takeEvery("DELETE", intent =>
        console.log(
            "DELETE caught in middleware with intent :",
            JSON.stringify(intent)
        )
    );
    yield takeEvery("RESET", intent =>
        console.log(
            "RESET caught in middleware with intent :",
            JSON.stringify(intent)
        )
    );
    yield takeEvery("ADD", intent =>
        console.log(
            "ADD caught in middleware with intent :",
            JSON.stringify(intent)
        )
    );
}
