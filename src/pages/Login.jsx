import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login logic
    navigate('/books'); // redirect to books page
  };

  return (
    <div className="p-4">
      <h1>Login</h1>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;