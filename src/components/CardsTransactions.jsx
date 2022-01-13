import React from 'react';
import PropTypes from 'prop-types';

const CardsTransactions = ({ numTransaction, amount, status }) => {

	CardsTransactions.propTypes = {
		numTransaction: PropTypes.string,
		amount: PropTypes.number,
		status: PropTypes.string
	};

	return (
		<article className='CardsTransactions'>
			<div className='informations'>
				<p>{numTransaction}</p>
				<p className='amount'>{amount}$</p>
				<p>{status}</p>
			</div>
			<button>View transactions</button>    
		</article>
	);
};

export default CardsTransactions;