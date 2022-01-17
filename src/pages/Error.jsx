import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

/**
 * 
 * @returns Error page
 */

function Error() {
	return (
		<div>
			<Header />
			<p>Sorry, this page does not exist</p>
			<Footer />
		</div>
	);
}

export default Error;