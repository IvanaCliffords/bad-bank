import { useContext } from 'react';

import UserContext from '../UserContext';

function Home() {

    const ctx = useContext(UserContext);

    return (

        <div className='content'>
            <div className="card-1">
                <img src="bank.png" alt="come on" />
                <div >
                    <h3 className="card-title">Welcome to the Bad Bank</h3>
                    <p className="card-text">You can't really do too much with this bank.</p>

                </div>
            </div>
        </div >

    );
}

export default Home;


//TO DO: 
// home page should have a Bootstrap card with: bank title, image and welcome message