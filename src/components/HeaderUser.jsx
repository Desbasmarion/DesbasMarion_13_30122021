import React from 'react';
import { NavLink } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user.actions';

/**
 * 
 * @returns Header for user component
 */

const HeaderUser = () => {
	const userData = useSelector(state => state.userReducer);
	const dispatch = useDispatch();

	const Logout = () => {
		dispatch(logout());
		localStorage.clear();
	};

	return (
		<div className='HeaderUser'> 
			<NavLink to='/'>
				<img src='../img/argentBankLogo.png' alt='logo' />
			</NavLink>
			<section>
				<article>
					<i className="fas fa-user-circle"></i>
					<NavLink to='/user' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
						{userData.data.firstName}
					</NavLink>
				</article> 
				<article>
					<i className="fas fa-sign-out-alt" />
					<NavLink to='/' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')} onClick={Logout}>
          Sign Out
					</NavLink>
				</article>
			</section>
		</div>
	);
};

export default HeaderUser;