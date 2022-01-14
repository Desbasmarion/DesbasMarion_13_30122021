import React, { useState } from 'react';
import { getToken } from '../redux/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Form = () => {

	const [ email, setEmail] = useState('');
	const [ password, setPassword ] = useState('');

	const status = useSelector(state => state.userReducer.status);

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(getToken(email, password));
	};

	
	if(status === 200){
		return <Navigate to='/user' />;
	}


	return (
		<div className='Form'>
			<i className="fas fa-user-circle"></i>
			<h1>Sign In</h1>
			<form onSubmit={ handleLogin } id='signInForm'>
				<div className="userName">
					<label htmlFor="userName">Email</label>
					<input type="text" id="userName" onChange={ (e) => setEmail(e.target.value)} value={email}/>
										
				</div>
				<div className="password">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
					<div className='errorPassword'></div>
				</div>
				<div className="remember">
					<input type="checkbox" id="remember" /><label htmlFor="remember">Remember me</label>
				</div>
				<div className='signInButton'>
					{/* <NavLink to="/user">Sign In</NavLink> */}
					<input type='submit' value='Sign In' />
				</div>
			</form>
		</div>
	);
};

export default Form;