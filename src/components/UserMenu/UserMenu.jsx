import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div className={css.container}>
      <p className={css.email}>{email}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.button}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
