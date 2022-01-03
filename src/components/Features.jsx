import React from 'react';

function Features() {
	return (
		<div className='Features'>
			<article>
				<div className='imageContainer'>
					<img src='../img/icon-chat.png' alt='icon chat' />
				</div>
				<h2>You are our #1 priority</h2>
				<p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
			</article>
			<article>
				<div className='imageContainer'>
					<img src='../img/icon-money.png' alt='icon money' />
				</div>
				<h2>More savings means higher rates</h2>
				<p>The more you save with us, the higher your interest rate will be!</p>
			</article>
			<article>
				<div className='imageContainer'>
					<img src='../img/icon-security.png' alt='icon security' />
				</div>
				<h2>Security you can trust</h2>
				<p>We use top of the line encryption to make sure your data and money is always safe.</p>
			</article>
		</div>
	);
}

export default Features;