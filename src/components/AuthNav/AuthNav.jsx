import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
        <Link to='/register' className={css.signUpLink}>Registration</Link>
        <Link to='/login'>LogIn</Link>
    </div>
  )
}
