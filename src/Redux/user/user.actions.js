import {UserActionTypes} from './users.types.js';

export const setCurrentUser = (user) =>({
	type:UserActionTypes.SET_CURRENT_USER,
	payload : user
})