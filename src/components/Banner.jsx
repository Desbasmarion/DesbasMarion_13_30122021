import React from 'react';

/**
 * 
 * @returns Banner component
 */

function Banner() {
	return (
		<div className='Banner'>
			<img src='../img/bank-tree.jpeg' alt='arbre'/>
			<article>
				<h1>
					<p className='firstText'>No fees.</p>
					<p className='firstText'>No minimum deposit.</p>
					<p className='firstText'>High interest rates.</p>
				</h1>
				<p >Open a savings account with</p>
				<p>Argent Bank today!</p>
			</article>
		</div>
	);
}

export default Banner;