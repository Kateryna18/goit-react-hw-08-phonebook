import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthNav() {
  return (
    <div>
        <Link to='/register'>Registration</Link>
        <Link to='/login'>LogIn</Link>
    </div>
  )
}
