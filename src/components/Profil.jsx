import React from 'react';
import CardsTransactions from './CardsTransactions';

function Profil() {
	
	return (
		<div className='Profil'>
			<h1><p>Welcome back</p>
				<p>Tony Jarvis!</p>
			</h1>
			<button>Edit Name</button>
			<CardsTransactions />
			<CardsTransactions />
			<CardsTransactions />
      
		</div>
	);
}

export default Profil;