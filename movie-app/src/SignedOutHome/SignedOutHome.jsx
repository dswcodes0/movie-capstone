import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import './SignedOutHome.css';
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

const SignedOutHome = () => {
    return (
      <Router>
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
          <Route path="/SignIn">
            <SignIn/>
          </Route>
          <Route path="/SignOut">
            <SignUp/>
          </Route>
        </Routes>
      </div>
      </Router>

    );
  };
  
  export default SignedOutHome;