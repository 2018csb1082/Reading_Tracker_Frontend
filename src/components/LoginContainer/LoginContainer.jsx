import {useState} from 'react';

import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import './LoginContainer.css'

function LoginContainer({onLogin}) {
  const [newUser, setNewUser] = useState(false);

  const handleNewUser = () => {
    setNewUser(true);
  };
  const handleOldUser = () => {
    setNewUser(false);
  };

  if (newUser) {
    return (
      <div className='LoginContainer'>
        <div className='LogIn Small'>
          <div className='Question'>Already have an account?</div>
          <button className='ChangeForm' onClick={handleOldUser}>click here!</button>
        </div>
        <div className='SignUp'>
          <SignUpForm onLogin={onLogin}/>
        </div>
      </div>
    );
  }

  return (
    <div className='LoginContainer'>
      <div className='LogIn'>
        <LoginForm onLogin={onLogin}/>
      </div>
      <div className='SignUp Small'>
        <div className='Question'>Don't have an account?</div>
        <button className='ChangeForm' onClick={handleNewUser}>click here!</button>
      </div>
    </div>
  );
}

export default LoginContainer;
