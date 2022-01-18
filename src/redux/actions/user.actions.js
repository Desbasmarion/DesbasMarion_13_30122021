import axios from 'axios';

/**
 * Actions for user: recovery token, user informations and update firstname and lastname
 */

export const GET_TOKEN = 'GET_TOKEN';
export const GET_USER = 'GET_USER';
export const UPDATE_INFOS = 'UPDATE_INFOS';
export const LOGOUT = 'LOGOUT';


export const getToken = (email, password) => {
	return (dispatch) => {
		axios({
			method: 'post',
			url: 'http://localhost:3001/api/v1/user/login',
			data: {
				email,
				password
			}
		})
			.then( (res) => {
				dispatch({ type: GET_TOKEN, payload: res.data.body.token, payloadTwo: res.data.status});
				dispatch(getUser(res.data.body.token));
			})
			.catch( (err) => console.log(err));
	};
};


export const getUser = (token) => {
	return (dispatch) => {
		axios({
			method:'post',
			url:'http://localhost:3001/api/v1/user/profile',
			headers: { Authorization: `Bearer ${token}` }
		})
			.then(res => {
				dispatch({ type:GET_USER, payload: res.data.body });
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const updateInfos = (token, firstName, lastName) => {
	return (dispatch) => {
		axios({
			method:'put', 
			url:'http://localhost:3001/api/v1/user/profile',
			headers: { Authorization: `Bearer ${token}` },
			data: {
				firstName,
				lastName
			}
		})
			.then((res) => {
				dispatch({ type: UPDATE_INFOS, payload: res.data.body });
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const logout = () => {
	return (dispatch) => dispatch({ type: LOGOUT, payload: undefined});
}; 