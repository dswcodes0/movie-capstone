import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
      <div>
        <h1>Unlock a world of enertainment!</h1>
        <form>
          <input type="text" name="username" placeholder='Username' />
          <input type="email" name="email" placeholder='Email' />
          <input type="password" name="password" placeholder='Password' />
          <input type="submit" placeholder='Submit'/>

        </form>
      </div>
    );
  };
  
  export default SignUp;