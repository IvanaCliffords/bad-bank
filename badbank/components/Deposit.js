import { useContext } from 'react';

import UserContext from '../UserContext';

function Deposit() {
    return (
        <div className='content'>
            <div className="card-1">
                <img src="bank.png" alt="come on" />
                <div >
                    <h3 className="card-title">Deposit</h3>


                </div>
            </div>
        </div >
    );
}


export default Deposit;


//TO DO: 

// Deposit Page

// Includes a Bootstrap card with a form that has:
// Deposit input field 
// Deposit button 
// Balance information displays above deposit form on the card
// 6. Deposit Page Functionality

// Deposit page should include the following functionality:
// Updated Balance: When a user deposits, the balance updates. 
// Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received. 
// Not A Number Alert: User receives an alert if they add something that is not a number. 
// Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
// Disable deposit button if nothing is input