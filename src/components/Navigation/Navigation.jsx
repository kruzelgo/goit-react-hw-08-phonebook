import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav className={css.navbar}>
    <NavLink
      to="/register"
      className={({ isActive }) =>
        `${css.navLinks} ${isActive ? css.activeLink : ''} ${css.fromCenter}`
      }
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) =>
        `${css.navLinks} ${isActive ? css.activeLink : ''} ${css.fromCenter}`
      }
    >
      Login
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) =>
        `${css.navLinks} ${isActive ? css.activeLink : ''} ${css.fromCenter}`
      }
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
