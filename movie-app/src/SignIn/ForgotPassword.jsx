import React from 'react';

const ForgotPassword = () => {
    return (
      <div>
        <h1>Forgot Password</h1>
        <form>
            <input type="email" placeholder='Enter your email'/>
            <input type="submit" value="Reset Password" />
        </form>
      </div>
    );
};

export default ForgotPassword;
