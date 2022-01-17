import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';
import rootReducer from './reducers';

/**
 * store configuration + devTools authorisation for production mode
 */

const store = createStore(
	rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;