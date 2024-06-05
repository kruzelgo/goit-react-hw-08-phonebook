import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from '../../Redux/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleSignin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(logIn({ email, password })).then(response => {
      if (response.error) {
        toast.error(response.error.message);
      } else if (authError) {
        toast.error(authError);
      }
    });
  };

  const handleSignup = event => {
    event.preventDefault();
    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmpassword.value;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    dispatch(register({ name: fullName, email, password })).then(response => {
      if (response.error) {
        toast.error(response.error.message);
      } else if (authError) {
        toast.error(authError);
      }
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className={`frame ${isSignup ? 'frame-long' : ''}`}>
        <div className="nav">
          <ul className="links">
            <li
              className={isSignup ? 'signup-inactive' : 'signin-active'}
              onClick={toggleForm}
            >
              <a className="btn">Sign in</a>
            </li>
            <li
              className={isSignup ? 'signup-active' : 'signin-inactive'}
              onClick={toggleForm}
            >
              <a className="btn">Sign up</a>
            </li>
          </ul>
        </div>
        <div>
          <form
            className={`form-signin ${isSignup ? 'form-signin-left' : ''}`}
            onSubmit={handleSignin}
          >
            <label htmlFor="email">Email</label>
            <input
              className="form-styling"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-styling"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="btn-animate">
              <button className="btn-signin" type="submit">
                Sign in
              </button>
            </div>
          </form>

          <form
            className={`form-signup ${
              isSignup ? 'form-signup-left' : 'form-signup-down'
            }`}
            onSubmit={handleSignup}
          >
            <label htmlFor="fullname">Full name</label>
            <input
              className="form-styling"
              type="text"
              name="fullname"
              placeholder="Full name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className="form-styling"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-styling"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <label htmlFor="confirmpassword">Confirm password</label>
            <input
              className="form-styling"
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              required
            />
            <div className="btn-animate">
              <button className="btn-signup" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div className="forgot">
          <a href="#">Forgot your password?</a>
        </div>

        <div>
          <div className="cover-photo"></div>
          <div className="profile-photo"></div>
          <h1 className="welcome">Welcome, Chris</h1>
          <a className="btn-goback" onClick={() => window.location.reload()}>
            Go back
          </a>
        </div>
      </div>

      <a
        id="refresh"
        value="Refresh"
        onClick={() => window.location.reload()}
        hidden="hidden"
      ></a>
    </div>
  );
};

export default LoginSignup;
