import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from './logo.svg';
import Jumbotron from './Jumbotron';

const NavBar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Bootstrap
            </Link>

            <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === false && <Link
                    to="/login"
                    className="btn btn-primary">
                        Log In
                    </Link>
                }

                {
                    globalState.loggedIn === true && 
                    <button onClick={logOut}
                    className="btn btn-primary">
                        Log Out
                    </button>
                }
            </div>
        </nav>
    )
}

export default NavBar;
