import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import ForgotPassword from './ForgotPassword';

const SignIn = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = {
      username: event.target.username.value,
      password: event.target.password.value
    };

    try {
      const response = await fetch('http://localhost:3002/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Login successful!');
        // FIXME Redirect user to signed in home with the credentials entered
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title-signin">Ready to binge?</h1>
      <h3 className="subtitle">Login</h3>
      <form onSubmit={handleSubmit} className="signin-form">
        <input type="text" name="username" placeholder="Username" className="input-field" />
        <input type="password" name="password" placeholder="Password" className="input-field" />
        <input type="submit" value="Submit" className="submit-btn" />
        <Link to="/ForgotPassword" className="forgot-password-link">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default SignIn;
