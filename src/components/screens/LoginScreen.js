import React, {useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)

  const handleSignInBtn = () => {
    setSignIn(true)
  }

  return ( 
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img 
        className="loginScreen__logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
      </div>
      <button 
      onClick={handleSignInBtn}
      className="loginScreen__button">Sign in</button>
      <div className="loginScreen__gradient"></div>
      <div className="loginScreen__body">
        { signIn
        ? <SignUpScreen/>
        : (
          <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel Any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className="loginScreen__input">
          <form>
            <input type="email" placeholder="Email Adress"/>
            <button
            className="loginScreen__inputButton">get started</button>
          </form>
        </div>
        </>
        )
        }

      </div>
    </div>
   );
}
 
export default LoginScreen;