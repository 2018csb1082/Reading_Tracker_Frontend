import {useState} from 'react';

import './SignUpForm.css'

function SignUpForm({onLogin}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='SignUpForm'>
      SignUp
    </div>
  );
}

export default SignUpForm;