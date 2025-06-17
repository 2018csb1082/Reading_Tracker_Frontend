import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../components/LoginContainer/LoginContainer';

import './Pages.css'

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login logic
    navigate('/books'); // redirect to books page
  };

  return (
    <div className="BasePage">
      <LoginContainer onLogin={handleLogin}/>
    </div>
  );
}

export default Login;