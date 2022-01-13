import React, { Fragment, useState } from 'react';
import CardsTransactions from './CardsTransactions';
import { useSelector, useDispatch } from 'react-redux';
import accountData from '../data';
import { updateInfos } from '../redux/actions/user.actions';
 
function Profil() {
	const userData = useSelector(state => state.userReducer);
	const [ editFirstName, setFirstName ] = useState('');
	const [ editLastName, setLastName ] = useState ('');
	const [ updateForm, setUpdateForm ] = useState(false);
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	
	const handleUpdate = () => {
		dispatch(updateInfos(token, editFirstName, editLastName));
		setUpdateForm(false);
	};
	
	return (
		<div className='Profil'>
			<h1><p>Welcome back</p>
				<p>{userData.firstName}</p> <p>{userData.lastName}!</p>
			</h1>
			<button onClick={ () => setUpdateForm(!updateForm)}>Edit Name</button>
			<div className='nameUpdate'>
				{updateForm === true && (
					<Fragment>
						<input type='text' placeholder={userData.firstName} onChange={ (e) => setFirstName(e.target.value)}></input>
						<input type='text' placeholder={userData.lastName} onChange={ (e) => setLastName(e.target.value)}></input>
						<button onClick={handleUpdate}>Save</button>
						<button>Cancel</button>
					
						
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