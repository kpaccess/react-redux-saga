import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersRequested, getUsersSuccess, getUserFailed} from "../actions"

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .catch(err => console.log(err))
}

function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        yield put({type: getUsersSuccess().type, users});
    } catch(err) {
        yield put({type: getUserFailed().type, err})
    }
}

function* userSaga() {
    yield takeEvery(getUsersRequested().type, fetchUsers)
}

export default userSaga;