import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/authOperations';
import { toast } from 'react-toastify';
import css from './UserMenu.module.css';

const UserMenu = ({ email }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    toast.info('You have logged out.');
  };

  return (
    <div className={css.containerLogIn}>
      <div className={css.userMenu}>
        <p>{email}</p>
        <button
          type="button"
          onClick={handleLogout}
          className={css.logoutButton}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
};

export default UserMenu;
