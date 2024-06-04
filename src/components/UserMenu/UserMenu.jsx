import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/authOperations';
import { toast } from 'react-toastify';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

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

export default UserMenu;
