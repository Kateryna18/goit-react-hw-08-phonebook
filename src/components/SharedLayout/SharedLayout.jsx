import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  const { isLoggedIn } = useSelector(state => state.auth);

  console.log(isLoggedIn);

  return (
    <>
      <header className={css.header}>
        {isLoggedIn && <Navigation />}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <div className={css.footerBox}>
        <p className={css.text}>Згода на обробку даних |</p>
        <p className={css.text}>Служба підтримки |</p>
        <p className={css.text}>Політика конфіденційності</p>
        </div>
        <p className={css.text}>© nazvaniesaita.ua, 2054</p>
      </footer>
    </>
  );
}
