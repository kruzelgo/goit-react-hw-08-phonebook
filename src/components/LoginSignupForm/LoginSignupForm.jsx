import React, { useState } from 'react';
import css from './LoginSignupForm.module.css';

const LoginSignupForm = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const handleSwitch = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className={css.container}>
      <div className={css.backbox}>
        <div className={`loginMsg ${isLoginFormVisible ? '' : css.visibility}`}>
          <div className={css.textcontent}>
            <p className={css.title}>Don't have an account?</p>
            <p>Sign up to save all your graph.</p>
            <button onClick={handleSwitch} id="switch1">
              Sign Up
            </button>
          </div>
        </div>
        <div
          className={`signupMsg ${isLoginFormVisible ? css.visibility : ''}`}
        >
          <div className={css.textcontent}>
            <p className={css.title}>Have an account?</p>
            <p>Log in to see all your collection.</p>
            <button onClick={handleSwitch} id="switch2">
              LOG IN
            </button>
          </div>
        </div>
      </div>

      <div className={css.frontbox}>
        <div className={`login ${isLoginFormVisible ? '' : css.hide}`}>
          <h2>LOG IN</h2>
          <div className={css.inputbox}>
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  PASSWORD" />
          </div>
          <p>FORGET PASSWORD?</p>
          <button>LOG IN</button>
        </div>

        <div className={`signup ${isLoginFormVisible ? css.hide : ''}`}>
          <h2>SIGN UP</h2>
          <div className={css.inputbox}>
            <input type="text" name="fullname" placeholder="  FULLNAME" />
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  PASSWORD" />
          </div>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
