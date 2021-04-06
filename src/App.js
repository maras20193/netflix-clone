import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen'



function App() {

  const user = null;

  return (
    <div className="app">
      <Router>
        {!user 
        ? (
          <LoginScreen/>
        )
        : (<Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
    </Switch>
        )}

    </Router>
    </div>         
  );
}

export default App;


