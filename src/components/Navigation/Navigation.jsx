import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav className={css.navbar}>
    <NavLink
      to="/register"
      className={({ isActive }) => (isActive ? css.activeLink : css.navLinks)}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? css.activeLink : css.link)}
    >
      Login
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? css.activeLink : css.link)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
