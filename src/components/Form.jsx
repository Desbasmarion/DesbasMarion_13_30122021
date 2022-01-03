import React from 'react';
import { NavLink } from 'react-router-dom';

function Form() {
	return (
		<div className='Form'>
			<i className="fas fa-user-circle"></i>
			<h1>Sign In</h1>
			<form>
				<div className="userName">
					<label htmlFor="userName">Username</label>
					<input type="text" id="userName" />
				</div>
				<div className="password">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className="remember">
					<input type="checkbox" id="remember" /><label htmlFor="remember">Remember me</label>
				</div>
				<div className='signInButton'>
					<NavLink to="/user">Sign In</NavLink>
				</div>
				
			</form>
		</div>
	);
}

export default Form;