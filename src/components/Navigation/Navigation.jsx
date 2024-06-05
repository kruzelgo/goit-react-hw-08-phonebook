import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = ({ isLoggedIn }) => (
  <nav className={css.navbar}>
    {isLoggedIn && (
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          `${css.navLinks} ${isActive ? css.activeLink : ''} ${css.fromCenter}`
        }
      >
        Contacts
      </NavLink>
    )}
    {!isLoggedIn && (
      <>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `${css.navLinks} ${isActive ? css.activeLink : ''} ${
              css.fromCenter
            }`
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${css.navLinks} ${isActive ? css.activeLink : ''} ${
              css.fromCenter
            }`
          }
        >
          Login
        </NavLink>
      </>
    )}
  </nav>
);

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
