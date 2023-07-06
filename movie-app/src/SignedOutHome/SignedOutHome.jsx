import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import './SignedOutHome.css';

const SignedOutHome = () => {
    return (
      <div className='main'>
        <div className="navbar">
        <nav>
          <ul> 
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign Up</Link>
            </li>
          </ul>          
        </nav>
        </div>
        <div className="hero">
          <h1>
            hi
          </h1>
        </div>
      </div>
      

    );
  };
  
  export default SignedOutHome;