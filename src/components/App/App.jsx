import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from '../../Redux/authOperations';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Contacts from '../../pages/Contacts/Contacts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userEmail = useSelector(state =>
    state.auth.user ? state.auth.user.email : null
  );
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (isLoggedIn && userEmail) {
      toast.success(`Welcome back, ${userEmail}!`);
    }
  }, [isLoggedIn, userEmail]);

  return (
    <div className={css.containerApp}>
      <ToastContainer />
      <h1 className={css.pageTitle}>Your PhoneBook</h1>
      <div className={css.backgroundOverlay}></div>
      <Navigation isLoggedIn={isLoggedIn} />
      {isFetchingCurrentUser ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <Register />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <Login />}
          />
          <Route
            path="/contacts"
            element={isLoggedIn ? <Contacts /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      {isLoggedIn && <UserMenu email={userEmail} />}
    </div>
  );
};
