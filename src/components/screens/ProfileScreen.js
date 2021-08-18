import React from 'react';
import {useSelector} from 'react-redux'
import {selectUser} from '../../userSlice'
import './ProfileScreen.css'
import Nav from '../Nav'
import { auth } from '../../firebase';

const ProfileScreen = () => {

  const user = useSelector(selectUser)

  return ( 
    <div className="profileScreen">
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" alt=""/>
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
              onClick={ () => auth.signOut()}
              className="profileScreen__signout">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ProfileScreen;