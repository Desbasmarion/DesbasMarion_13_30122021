import React, { useState } from 'react';
//import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

	const [ email, setEmail] = useState('');
	const [ password, setPassword ] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();

		const emailError = document.querySelector('.errorMail');
		const passwordError = document.querySelector('.errorPassword');

		axios({
			method: 'post',
			url: 'http://localhost:3001/api/v1/user/login',
			data: {
				email,
				password
			}
		})
			.then( (res) => {
				if(res.data.errors){
					emailError.innerHTML = res.data.errors.email;
					passwordError.innerHTML = res.data.errors.password;
				} else{
					localStorage.setItem('token', res.data.body.token);
					window.location = 'user';
				}
			})
			.catch( (err) => console.log(err));
	};


	return (
		<div className='Form'>
			<i className="fas fa-user-circle"></i>
			<h1>Sign In</h1>
			<form onSubmit={ handleLogin } id='signInForm'>
				<div className="userName">
					<label htmlFor="userName">Email</label>
					<input type="text" id="userName" onChange={ (e) => setEmail(e.target.value)} value={email}/>
					<div className='errorMail'></div>
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