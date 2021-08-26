import { useContext } from 'react';



import UserContext from '../UserContext';

function Withdraw() {

    return (
        <div className='content'>
            <div className="card-1">

                <h3 className="card-title">Withdraw</h3>



            </div>
        </div >
    );
}

export default Withdraw;


//TO DO: 

// Withdraw Page

// Includes a Bootstrap card with a form that has:
// Withdraw input field 
// Withdraw button 
// Balance information displays above deposit form on the card
// 8. Withdraw Page Functionality

// Withdraw page should include the following functionality:
// Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance. 
// Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed. 
// Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
// Not A Number Alert: User receives an alert if they add something that is not a number. 
// Disable deposit button if nothing is input