import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen'
import { auth } from './firebase';
import { useDispatch, useSelector} from 'react-redux' 
import { LOGIN, LOGOUT, selectUser } from './userSlice';
import ProfileScreen from './components/screens/ProfileScreen'




function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(LOGIN({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(LOGOUT())
      }

      return unsubscribe;
    })
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>)
        : (
          <Switch>            
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
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


