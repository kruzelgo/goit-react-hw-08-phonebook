// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../Redux/authOperations';
// import css from './Login.module.css';

// const Login = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(logIn({ email, password }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.loginContainer}>
//       <label className={css.labelLogin}>
//         Email
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label className={css.labelLogin}>
//         Password
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <button type="submit" className={css.submitButtonLogin}>
//         Login
//       </button>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/authOperations';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.loginContainer}>
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
      <button type="submit" className={css.submitButtonLogin}>
        Login
      </button>
    </form>
  );
};

export default Login;
