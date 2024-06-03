import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/authOperations';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    dispatch(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.loginContainer}>
      <div className={css.formGroup}>
        <input
          type="text"
          className={css.formField}
          placeholder="Name"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name" className={css.formLabel}>
          Name
        </label>
      </div>
      <div className={css.formGroup}>
        <input
          type="email"
          className={css.formField}
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className={css.formLabel}>
          Email
        </label>
      </div>
      <div className={css.formGroup}>
        <input
          type="password"
          className={css.formField}
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label htmlFor="password" className={css.formLabel}>
          Password
        </label>
      </div>
      <div className={css.formGroup}>
        <input
          type="password"
          className={css.formField}
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <label htmlFor="confirmPassword" className={css.formLabel}>
          Confirm Password
        </label>
      </div>
      {error && <p className={css.error}>{error}</p>}
      <button type="submit" className={css.submitButtonLogin}>
        Register
      </button>
    </form>
  );
};

export default Register;
