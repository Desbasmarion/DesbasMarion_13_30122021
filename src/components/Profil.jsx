import React, { Fragment, useState } from 'react';
import CardsTransactions from './CardsTransactions';
import { useSelector, useDispatch } from 'react-redux';
import accountData from '../data';
import { updateInfos } from '../redux/actions/user.actions';

/**
 * 
 * @returns Profil component with Redux state 
 */

function Profil() {
	const userData = useSelector(state => state.userReducer);
	const [ editFirstName, setFirstName ] = useState('');
	const [ editLastName, setLastName ] = useState ('');
	const [ updateForm, setUpdateForm ] = useState(false);
	const dispatch = useDispatch();

	const handleUpdate = () => {
		dispatch(updateInfos(userData.token, editFirstName, editLastName));
		setUpdateForm(false);
	};

	const firstName = userData.data.firstName;
	const lastName = userData.data.lastName;
	
	return (
		<div className='Profil'>
			<h1><p>Welcome back</p>
				<p>{firstName}</p> <p>{lastName}!</p>
			</h1>
			<button onClick={ () => setUpdateForm(!updateForm)}>Edit Name</button>
			<div className='nameUpdate'>
				{updateForm === true && (
					<Fragment>
						<div className='textEditContainer'>
							<input type='text' placeholder={userData.data.firstName} onChange={ (e) => setFirstName(e.target.value)}></input>
							<input type='text' placeholder={userData.data.lastName} onChange={ (e) => setLastName(e.target.value)}></input>
						</div>
						<div className='buttonEditContainer'>
							<button onClick={handleUpdate}>Save</button>
							<button onClick={() => setUpdateForm(false)}>Cancel</button>		
						</div>
					</Fragment>
				)}
			</div>
			<CardsTransactions numTransaction={accountData[0].numTransaction} amount={accountData[0].amount} status={accountData[0].status}/>
			<CardsTransactions numTransaction={accountData[1].numTransaction} amount={accountData[1].amount} status={accountData[1].status}/>
			<CardsTransactions numTransaction={accountData[2].numTransaction} amount={accountData[2].amount} status={accountData[2].status}/>
      
		</div>
	);
}

export default Profil;