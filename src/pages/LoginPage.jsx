import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch(event.target.name) {
        case "email":
                setEmail(event.target.value);
                break;
        case "password":
                    setPassword(event.target.value);
            break;
        default:
            return;
    }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const authData = {
      email,
      password,
    }
    dispatch(logInUser(authData))
    setPassword('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        Email
          <input value={email} type="email" name="email" onChange={handleChange}/>
        </label>
        <label>
        Password
          <input value={password} type="password"  name="password" onChange={handleChange}/>
        </label>
        <button>Log In</button>
      </form>
    </div>
  )
}
