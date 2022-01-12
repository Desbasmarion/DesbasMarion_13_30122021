import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from '../components/Form';


function SignIn() {
	return (
		<div className='SignIn'>
			<Header />
			<section>
				<Form />
			</section>
			<Footer />
		</div>
	);
}

export default SignIn;