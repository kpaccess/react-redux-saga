import produce from "immer";
import { handleActions } from "redux-actions";
import { getUsersRequested, getUsersSuccess, getUserFailed } from "../actions";

const initialState = {
    users: [],
    loading: false,
    error: null
}

/*export default function users(state = initialState, action) {
    switch(action.type) {
        case getUsersRequested().type:
            return {
                ...state,
                loading: true
            }
        case getUsersSuccess().type:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}*/


const users = handleActions({
    [getUsersSuccess]: produce((draft, action) => {
        draft.users = action.users;
        return draft;
    })
}, initialState);


export default users;