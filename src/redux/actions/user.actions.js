import axios from 'axios';

export const GET_USER = 'GET_USER';

export const getUser = () => {
	return(dispatch) => {
		return axios
			.post('http://localhost:3001/api/v1/user/profile')
			.then(res => {
				dispatch({ type:GET_USER, payload: res.data.body });
			})
			.catch(err => console.log(err));
	};
};