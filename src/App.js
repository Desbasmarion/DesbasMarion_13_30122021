import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/actions/user.actions';


function App() {
	const token = localStorage.getItem('token');
	const [ uid, setUid ] = useState(null);

	const dispatch = useDispatch();

	useEffect( async () => {
		await axios({
			method: 'post',
			url: 'http://localhost:3001/api/v1/user/profile',
			headers: { Authorization: `Bearer ${token}` },
		})
			.then(res => {
				setUid(res.data.body.id);
			})
			.catch(err => console.log(err));

		if(uid) dispatch(getUser());
		
	}, [uid]);

	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='sign-in' element={ <SignIn /> } />
				<Route path='user' element={ <User /> } />
				<Route path='*' element={ <Error /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

