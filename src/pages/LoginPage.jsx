import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import css from './LoginPage.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();

  const authData = {
    email,
    password,
  }

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
const validFields = authData.email && authData.password

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!validFields) {
      toast.error("All fields of the form must be filled");
      return
    }
    
    dispatch(logInUser(authData))
    setPassword('');
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
        Email
          <input className={css.input} value={email} type="email" name="email" onChange={handleChange}/>
        </label>
        <label>
        Password
          <input className={css.input} value={password} type="password"  name="password" onChange={handleChange}/>
        </label>
        <button className={css.formButton}>Log In</button>
      </form>
    </>
  )
}
