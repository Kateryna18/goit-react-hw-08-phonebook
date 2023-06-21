import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
        <p>{user.name}</p>
        <button className={css.menuButton} onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
  )
}
