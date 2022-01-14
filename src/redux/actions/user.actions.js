import axios from 'axios';

export const GET_TOKEN = 'GET_TOKEN';
export const GET_USER = 'GET_USER';
export const UPDATE_INFOS = 'UPDATE_INFOS';


//Errors
export const GET_USER_ERRORS = 'GET_USER_ERRORS';
export const UPDATE_INFOS_ERRORS = 'UPDATE_INFOS_ERRORS';


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
				dispatch({ type: GET_USER_ERRORS, payload: err.message});
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
				dispatch({ type: UPDATE_INFOS_ERRORS, payload: err.message});
			});
	};
};
