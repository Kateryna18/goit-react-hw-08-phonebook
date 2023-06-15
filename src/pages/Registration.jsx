import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser } from 'redux/operations';

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
    <div>
      <h2>Please, enter your data</h2>
      <form onSubmit={handleSubmit}>
        <label>
        Name
          <input type="name" onChange={handleChange} name="name" value={name}/>
        </label>
        <label>
        Email
          <input type="email" onChange={handleChange} name="email" value={email}/>
        </label>
        <label>
        Password
          <input type="password" onChange={handleChange} name="password" value={password}/>
        </label>
        <button>Registration</button>
      </form>
    </div>
  );
}
