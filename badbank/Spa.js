import { Route, HashRouter } from 'react-router-dom';
import UserContext from './UserContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.js';

import Home from './components/Home.js';
import CreateAccount from './components/CreateAccount.js';
import Deposit from './components/Deposit.js';
import Withdraw from './components/Withdraw.js';
import AllData from './components/AllData.js';

function Spa() {
    return (
        <HashRouter>
            <NavBar />
            <UserContext.Provider value={{
                loggedInUser: null,
                users: [
                    { username: 'acrist', password: 'password', balance: 10 }
                ]
            }}>
                <Route path='/' exact component={Home} />
                <Route path='/createaccount' component={CreateAccount} />
                <Route path='/deposit' component={Deposit} />
                <Route path='/withdraw' component={Withdraw} />
                <Route path='/alldata' component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

export default Spa;