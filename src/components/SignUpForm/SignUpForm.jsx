import {useState} from 'react';

import './SignUpForm.css'

function SignUpForm({onLogin}) {
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
    <div className='SignUpForm'>
      {error !== "" && (<div className="Alert">{error}</div>)}
      <div className='FormRow'>
        <h1>Sign Up</h1>
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
        <button className='FormButton' onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpForm;