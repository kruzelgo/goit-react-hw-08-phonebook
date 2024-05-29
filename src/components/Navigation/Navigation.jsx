import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav className={css.nav}>
    <NavLink
      to="/register"
      className={css.link}
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
  </nav>
);

export default Navigation;
