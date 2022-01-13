import { GET_USER, UPDATE_INFOS } from '../actions/user.actions';

const initialState = {};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_USER:
		return action.payload;

	case UPDATE_INFOS:
		return {
			...state,
			firstName: action.payload,
			lastName: action.payloadTwo
		};
	default:
		return state;
	}
};

export default userReducer;