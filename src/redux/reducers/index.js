import { combineReducers } from 'redux';
import userReducer from './user.reducer';

/**
 * Establishment combineReducers for future reducers
 */

export default combineReducers({
	userReducer,
});