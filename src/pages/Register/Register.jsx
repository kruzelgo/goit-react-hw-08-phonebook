import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/authOperations';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <label className={css.formGroup}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.formGroup}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.formGroup}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.submitButton}>
        Register
      </button>
    </form>
  );
};

export default Register;
