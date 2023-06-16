import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export default function UserMenu() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
        <p>{user.name}</p>
        <button onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
  )
}
