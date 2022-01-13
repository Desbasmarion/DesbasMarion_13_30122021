import axios from 'axios';

export const GET_USER = 'GET_USER';
export const UPDATE_INFOS = 'UPDATE_INFOS';

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
			.catch(err => console.log(err));
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
			.then(() => {
				dispatch({ type: UPDATE_INFOS, payload: firstName, payloadTwo: lastName });
			})
			.catch(err => console.log(err));
	};
};
