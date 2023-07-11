import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
      <h1 className="title-signup">Unlock a world of entertainment!</h1>
      <form className="signup-form">
        <input type="text" name="username" placeholder="Username" className="input-field" />
        <input type="email" name="email" placeholder="Email" className="input-field" />
        <input type="password" name="password" placeholder="Password" className="input-field" />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default SignUp;
