
function CreateAccount() {

    return (
        <div className='content'>
            <div className="card-1">

                <h3 className="card-title">Create Account</h3>



            </div>
        </div >
    );
}

export default CreateAccount;


//TO DO: 
// 3. Create Account Page
// Includes a Bootstrap card with a form that has:
// Name input field
// Email address input field
// Password input field
// Create account button
// 4. Create Account Page Functionality

// Create account page should include the following functionality:
// Success message: Upon selecting the create account button the user should see a success message. 
// Add Another Account Button: Upon selecting the create account button, the user should see an add another account button. 
// Cleared Create Account Form: Upon selecting the create account button, t will open a cleared create account form.
// Name validation: The user receives an alert if the name field is left blank. 
// Email validation: The user receives an alert if this field is blank 
// Password validation: The user receives an alert if the password is less than 8 characters long. 
// Disable submit button if nothing is inputted