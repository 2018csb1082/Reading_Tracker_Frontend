import {useState} from 'react';

import './LoginForm.css'

function LoginForm({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='LoginForm'>
      Login
    </div>
  );
}

export default LoginForm;
