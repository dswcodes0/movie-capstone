import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import './SignedOutHome.css';
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

const SignedOutHome = () => {
    return (
      <div>
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
        <Routes>
          <Route element={<SignIn/>} path="/SignIn">
            
          </Route>
          <Route element={<SignUp/>} path="/SignOut">
            
          </Route>
        </Routes>
      </div>

    );
  };
  
  export default SignedOutHome;