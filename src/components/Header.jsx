import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 
 * @returns Header component
 */

function Header() {
	return (
		<div className='Header'>
			<NavLink to='/'>
				<img src='../img/argentBankLogo.png' alt='logo' />
			</NavLink>
			<article>
				<i className="fas fa-user-circle"></i>
				<NavLink to='/sign-in' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
          Sign In
				</NavLink>
			</article> 
		</div>
	);
}
export default Header;