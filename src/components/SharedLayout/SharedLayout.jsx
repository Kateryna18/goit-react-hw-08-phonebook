import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div>
        <header>
        <Navigation/>
        <AuthNav/>
        <UserMenu/>
        </header>
        <main>
        <Outlet/>
        </main>
        <footer>FOOTER</footer>
    </div>
  )
}
