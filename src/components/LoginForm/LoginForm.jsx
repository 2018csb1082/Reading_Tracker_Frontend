import {useState} from 'react';

import './LoginForm.css'

function LoginForm({onLogin}) {
  const [error, setError] = useState("");
  const [timeoutId, setTimeoutId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const showError = (message) => {
    setError(message);
    const error_timeoutId = setTimeout(() => {
      setError("");
    }, 2000);
    setTimeoutId(error_timeoutId);
    return() => clearTimeout(error_timeoutId);
  };
  const handleSubmit = () => {
    if (error !== "")
      setError("");
    if (timeoutId !== "")
      clearTimeout(timeoutId);
    if ( email === "" || password === "") {
      showError('Email and password are required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError("");
    onLogin();
  };

  return (
    <div className='LoginForm'>
      {error !== "" && (<div className="Alert">{error}</div>)}
      <div className='FormRow'>
        <h1>Log In</h1>
      </div>
      <div className='FormRow'>
        <input
          type="email"
          className='FormInput'
          placeholder='Email'
          value={email}
          onChange={handleMailChange}
        />
      </div>
      <div className='FormRow'>
        <input
          type="Password"
          className='FormInput'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className='FormRow'>
        <button className='FormButton' onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}

export default LoginForm;
