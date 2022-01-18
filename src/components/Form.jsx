import React, { useState } from 'react';
import { getToken } from '../redux/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

/**
 * 
 * @returns Login component with Redux state 
 */

const Form = () => {

	const [ email, setEmail] = useState('');
	const [ password, setPassword ] = useState('');

	const status = useSelector(state => state.userReducer.status);
	console.log(status);

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		
		if(email == ''){
			document.querySelector('.errorEmail').innerHTML = 'Veuillez renseigner ce champ';
		}else{
			document.querySelector('.errorEmail').innerHTML = '';
		}

		if(password == ''){
			document.querySelector('.errorPassword').innerHTML = 'Veuillez renseigner ce champ';
		}else{
			document.querySelector('.errorPassword').innerHTML = '';
		}
		
		if(status != 200){
			setTimeout(() => {
				document.querySelector('.userNotFound').innerHTML = 'Utilisateur non trouvé';
			}, 1000);
			
		}else{
			document.querySelector('.userNotFound').innerHTML = '';
		}

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
					<p className='errorEmail'></p>
				</div>
				<div className="password">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
					<p className='errorPassword'></p>
				</div>
				<div className="remember">
					<input type="checkbox" id="remember" /><label htmlFor="remember">Remember me</label>
				</div>
				<p className='userNotFound'></p>
				<div className='signInButton'>
					<input type='submit' value='Sign In' />
				</div>
			</form>
		</div>
	);
};

export default Form;