import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import NavBar from './NavBar.js';

const LoginPage = () => {

    // These will be assigned values by React
    let emailField;
    let passwordField;

    // Connected to globalState
    const [globalState, setGlobalState] = useContext(AppContext);

    // A local state
    const [state, setState] = useState(
        {
            loading: false
        }
    )

    const loginUser = () => {

        // Start loading
        setState({...state, loading: true})

        fetch('http://localhost:8081/users/login', 
            {
                method: 'POST',
                body: JSON.stringify({
                    email: emailField.value,
                    password: passwordField.value
                }),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (result) => result.json()
        )
        .then (
            (json) => {
                const { message, jsonwebtoken } = json;
                if(jsonwebtoken) {
                    // update the globalState
                    setGlobalState(
                        {
                            ...globalState,
                            loggedIn: true
                        }
                    )

                    // save the jwt in the browser
                    localStorage.setItem('jwt', jsonwebtoken);

                    setState({...state, loading: false})
                } else {
                    // throw an error
                    alert(message);
                }
            }
        )
    }


    // If the user is loggedIn, redirect them
    if(globalState.loggedIn === true) {
        return(<Redirect to="/"/>)
    }

    // Otherwise, show the login form
    else {
        return(
            <div>
                <NavBar />
                <h1>Login</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>

                                    <input 
                                    ref={ (comp)=> emailField = comp}
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>

                                    <input 
                                    ref={(comp)=> passwordField = comp }
                                    type="password" 
                                    className="form-control" 
                                    id="exampleInputPassword1"/>

                                </div>

                                <button 
                                onClick={loginUser}
                                type="button"
                                className="btn btn-primary">Login</button>

                                { state.loading && <p>Loading...</p> }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default LoginPage;