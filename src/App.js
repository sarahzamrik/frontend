import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import './App.css';

const App = () => {

  const [globalState, setGlobalState] = useState({
    loggedIn: localStorage.getItem('jwt') ? true : false,
    user: null
  });

  return (

    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPage}/>
          <Route path="/login" exact={true} component={LoginPage}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
