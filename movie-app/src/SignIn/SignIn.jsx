import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import ForgotPassword from './ForgotPassword'

const SignIn = () => {
    return (
      <div>
        <h1>Ready to binge?</h1>
        <h3>Login</h3>
        <form action="submit">
          <input type="text" id='username' placeholder='Username'/>
          <input type="password" id='password' placeholder='Password' />
          <input type="submit" value="Submit"></input>
        <Link to="/ForgotPassword">Forgot Password?</Link>
        </form>
      </div>
    );
  };
  
  export default SignIn;