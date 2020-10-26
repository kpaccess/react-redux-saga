import { createActions } from 'redux-actions';

export const { getUsers, getUsersRequested, getUsersSuccess, getUserFailed } = createActions( "GET_USERS", "GET_USERS_REQUESTED", "GET_USERS_SUCCESS", "GET_USER_FAILED" )