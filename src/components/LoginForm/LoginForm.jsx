import {useState} from 'react';

import './LoginForm.css'

function LoginForm({onLogin}) {
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
    <div className='LoginForm'>
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
