import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param { String } numTransaction - mocked data
 * @param { Number } amount - mocked data
 * @param { String } status - mocked data 
 * @returns Cards transactions component 
 */
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