function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand" href="#">Bad Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#/createaccount/">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/">AllData</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;


//TO DO: 

// Navigation Bar
// Includes Create Account, Deposit, Withdraw, All Data, and Home pages
// Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page. 
// Styled with Bootstrap
// Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page. 
// Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.