import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import ForgotPassword from './ForgotPassword';

const SignIn = () => {
  return (
    <div className="container">
      <h1 className="title-signin">Ready to binge?</h1>
      <h3 className="subtitle">Login</h3>
      <form action="submit" className="signin-form">
        <input type="text" id="username" placeholder="Username" className="input-field" />
        <input type="password" id="password" placeholder="Password" className="input-field" />
        <input type="submit" value="Submit" className="submit-btn" />
        <Link to="/ForgotPassword" className="forgot-password-link">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default SignIn;
