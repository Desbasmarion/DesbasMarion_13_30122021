import {  GET_TOKEN, GET_USER, UPDATE_INFOS } from '../actions/user.actions';
import produce from 'immer';

const initialState = {token: null, status: 0, data: {}};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
	
	case GET_TOKEN:
		return produce(state, draft =>{
			draft.token = action.payload;
			draft.status = action.payloadTwo;
		});
	
	case GET_USER:
		return produce(state, draft => {
			draft.data = action.payload;
		});

	case UPDATE_INFOS:
		return produce(state, draft => {
			draft.data = action.payload;
		});

	default:
		return state;
	}
};

export default userReducer;