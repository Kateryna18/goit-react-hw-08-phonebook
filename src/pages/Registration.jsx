import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser } from 'redux/auth/operations';
import css from './Registration.module.css';


export default function Registration() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();

const user = {
    name,
    email,
    password,
}

console.log(user);

const handleChange = (event) => {
    switch(event.target.name) {
        case "name":
            setName(event.target.value);
            break;
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
    dispatch(registrationUser(user));
    formReset();
}

const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
}

  return (
    <>
      <h2 className={css.title}>Please, enter your data</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
        Name
          <input className={css.input} type="name" onChange={handleChange} name="name" value={name}/>
        </label>
        <label>
        Email
          <input className={css.input} type="email" onChange={handleChange} name="email" value={email}/>
        </label>
        <label>
        Password
          <input className={css.input} type="password" onChange={handleChange} name="password" value={password}/>
        </label>
        <button className={css.formButton}>Registration</button>
      </form>
    </>
  );
}
