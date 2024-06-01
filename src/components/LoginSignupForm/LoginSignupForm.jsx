// // import React, { useState } from 'react';
// // import css from './LoginSignupForm.module.css';

// // const LoginSignupForm = () => {
// //   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

// //   const handleSwitch = () => {
// //     setIsLoginFormVisible(!isLoginFormVisible);
// //   };

// //   return (
// //     <div className={css.container}>
// //       <div className={css.backbox}>
// //         <div className={`loginMsg ${isLoginFormVisible ? '' : css.visibility}`}>
// //           <div className={css.textContent}>
// //             <p className={css.titleContent}>Don't have an account?</p>
// //             <p className={css.titleContent}>Sign up to save all your graph.</p>
// //             <button onClick={handleSwitch} id="switch1">
// //               Sign Up
// //             </button>
// //           </div>
// //         </div>
// //         <div
// //           className={`signupMsg ${isLoginFormVisible ? css.visibility : ''}`}
// //         >
// //           <div className={css.textContent}>
// //             <p className={css.titleContent}>Have an account?</p>
// //             <p className={css.titleContent}>
// //               Log in to see all your collection.
// //             </p>
// //             <button onClick={handleSwitch} id="switch2">
// //               LOG IN
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className={css.frontbox}>
// //         <div className={`login ${isLoginFormVisible ? '' : css.hide}`}>
// //           <h2 className="css.headerTitle">LOG IN</h2>
// //           <div className={css.inputbox}>
// //             <input type="text" name="email" placeholder="  EMAIL" />
// //             <input type="password" name="password" placeholder="  PASSWORD" />
// //           </div>
// //           <p className={css.titleContent}>FORGET PASSWORD?</p>
// //           <button className="css.buttonLogIn">LOG IN</button>
// //         </div>

// //         <div className={`signup ${isLoginFormVisible ? css.hide : ''}`}>
// //           <h2 className="css.headerTitle">SIGN UP</h2>
// //           <div className={css.inputbox}>
// //             <input type="text" name="fullname" placeholder="  FULLNAME" />
// //             <input type="text" name="email" placeholder="  EMAIL" />
// //             <input type="password" name="password" placeholder="  PASSWORD" />
// //           </div>
// //           <button>SIGN UP</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginSignupForm;

// import React, { useState } from 'react';
// import css from './LoginSignupForm.module.css';

// const LoginSignup = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const toggleForm = () => {
//     setIsSignup(!isSignup);
//   };

//   const handleSignup = () => {
//     setIsSuccess(true);
//     toggleForm();
//   };

//   const handleSignin = () => {
//     toggleForm();
//   };

//   return (
//     <div className="container">
//       <div
//         className={`frame ${isSignup ? 'frame-long' : ''} ${
//           isSuccess ? 'frame-short' : ''
//         }`}
//       >
//         <div className={`nav ${isSuccess ? 'nav-up' : ''}`}>
//           <ul className="links">
//             <li
//               className={isSignup ? 'signup-inactive' : 'signin-active'}
//               onClick={toggleForm}
//             >
//               <a className="btn">Sign in</a>
//             </li>
//             <li
//               className={isSignup ? 'signup-active' : 'signin-inactive'}
//               onClick={toggleForm}
//             >
//               <a className="btn">Sign up</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <form
//             className={`form-signin ${isSignup ? 'form-signin-left' : ''}`}
//             name="form"
//           >
//             <label htmlFor="username">Username</label>
//             <input
//               className="form-styling"
//               type="text"
//               name="username"
//               placeholder=""
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               className="form-styling"
//               type="text"
//               name="password"
//               placeholder=""
//             />
//             <input type="checkbox" id="checkbox" />
//             <label htmlFor="checkbox">
//               <span className="ui"></span>Keep me signed in
//             </label>
//             <div className="btn-animate">
//               <a className="btn-signin" onClick={handleSignin}>
//                 Sign in
//               </a>
//             </div>
//           </form>

//           <form
//             className={`form-signup ${
//               isSignup ? 'form-signup-left' : 'form-signup-down'
//             }`}
//             name="form"
//           >
//             <label htmlFor="fullname">Full name</label>
//             <input
//               className="form-styling"
//               type="text"
//               name="fullname"
//               placeholder=""
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               className="form-styling"
//               type="text"
//               name="email"
//               placeholder=""
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               className="form-styling"
//               type="text"
//               name="password"
//               placeholder=""
//             />
//             <label htmlFor="confirmpassword">Confirm password</label>
//             <input
//               className="form-styling"
//               type="text"
//               name="confirmpassword"
//               placeholder=""
//             />
//             <a className="btn-signup" onClick={handleSignup}>
//               Sign Up
//             </a>
//           </form>

//           <div className={`success ${isSuccess ? 'success-left' : ''}`}>
//             <svg
//               width="270"
//               height="270"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               viewBox="0 0 60 60"
//               id="check"
//               className={isSuccess ? 'checked' : ''}
//             >
//               <path
//                 fill="#ffffff"
//                 d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314
//                 c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042
//                 c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578"
//               />
//             </svg>
//             <div className="successtext">
//               <p>Thanks for signing up! Check your email for confirmation.</p>
//             </div>
//           </div>
//         </div>

//         <div className={`forgot ${isSignup ? 'forgot-left' : ''}`}>
//           <a href="#">Forgot your password?</a>
//         </div>

//         <div>
//           <div className="cover-photo"></div>
//           <div className="profile-photo"></div>
//           <h1 className={`welcome ${isSignup ? 'welcome-left' : ''}`}>
//             Welcome, Chris
//           </h1>
//           <a
//             className={`btn-goback ${isSignup ? 'btn-goback-up' : ''}`}
//             onClick={() => window.location.reload()}
//           >
//             Go back
//           </a>
//         </div>
//       </div>

//       <a id="refresh" onClick={() => window.location.reload()}>
//         <svg
//           className="refreshicon"
//           version="1.1"
//           id="Capa_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           x="0px"
//           y="0px"
//           width="25px"
//           height="25px"
//           viewBox="0 0 322.447 322.447"
//           style={{ enableBackground: 'new 0 0 322.447 322.447' }}
//           xmlSpace="preserve"
//         >
//           <path
//             d="M321.832,230.327c-2.133-6.565-9.184-10.154-15.75-8.025l-16.254,5.281C299.785,206.991,305,184.347,305,161.224
//                   c0-84.089-68.41-152.5-152.5-152.5C68.411,8.724,0,77.135,0,161.224s68.411,152.5,152.5,152.5c6.903,0,12.5-5.597,12.5-12.5
//                   c0-6.902-5.597-12.5-12.5-12.5c-70.304,0-127.5-57.195-127.5-127.5c0-70.304,57.196-127.5,127.5-127.5
//                   c70.305,0,127.5,57.196,127.5,127.5c0,19.372-4.371,38.337-12.723,55.568l-5.553-17.096c-2.133-6.564-9.186-10.156-15.75-8.025
//                   c-6.566,2.134-10.16,9.186-8.027,15.751l14.74,45.368c1.715,5.283,6.615,8.642,11.885,8.642c1.279,0,2.582-0.198,3.865-0.614
//                   l45.369-14.738C320.371,243.946,323.965,236.895,321.832,230.327z"
//           />
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default LoginSignup;
