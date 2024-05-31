import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import LoginSignupForm from '../LoginSignupForm/LoginSignupForm';

const Navigation = () => (
  <nav className={css.navbar}>
    <NavLink
      to="/register"
      className={css.navLinks}
      activeClassName={css.activeLink}
    >
      Register
    </NavLink>
    <NavLink to="/login" className={css.link} activeClassName={css.activeLink}>
      Login
    </NavLink>
    <NavLink
      to="/contacts"
      className={css.link}
      activeClassName={css.activeLink}
    >
      Contacts
    </NavLink>
    <LoginSignupForm />
  </nav>
);

export default Navigation;
