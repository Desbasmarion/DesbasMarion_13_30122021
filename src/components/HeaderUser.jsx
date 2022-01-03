import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderUser() {
	return (
		<div className='HeaderUser'> 
			<NavLink to='/'>
				<img src='../img/argentBankLogo.png' alt='logo' />
			</NavLink>
			<section>
				<article>
					<i className="fas fa-user-circle"></i>
					<NavLink to='/user' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
          Tony
					</NavLink>
				</article> 
				<article>
					<i className="fas fa-sign-out-alt" />
					<NavLink to='/' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
          Sign Out
					</NavLink>
				</article>
			</section>
		</div>
	);
}

export default HeaderUser;