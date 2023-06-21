import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  const { isLoggedIn } = useSelector(state => state.auth);

  console.log(isLoggedIn);

  return (
    <div>
      <header>
        {isLoggedIn && <Navigation />}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}
