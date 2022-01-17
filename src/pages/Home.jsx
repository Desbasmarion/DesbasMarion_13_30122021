import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';

/**
 * 
 * @returns Home page
 */

function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<Features />
			<Footer />
		</div>
	);
}

export default Home;