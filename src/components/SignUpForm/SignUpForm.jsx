import {useState} from 'react';

import './SignUpForm.css'

function SignUpForm({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleSubmit = () => {
    //check mail and password
    onLogin();
  };

  return (
    <div className='SignUpForm'>
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