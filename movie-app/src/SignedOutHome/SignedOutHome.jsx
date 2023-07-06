import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import './SignedOutHome.css';
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

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
          Welcome to the Watcher!
          </h1>
          <div className='watcher'>
            <img src="../chatbot.png" alt="" />
          <button>Ask the Watcher</button>
          </div>
          <div className='features'>
              <div className="feature">
                <h3>Recomendations</h3>
                <p>Get personalized ecomendations based on your watch history</p>
              </div>
              <div className="feature">
              <h3>Trailers</h3>
              <p>Get HD trailers to any show you would like to view</p>
              </div>
              <div className="feature">
              <h3>Saved Progress</h3>
              <p>Don't worry about saving anything, it'll all be here, just browse, we do the rest.</p>
              </div>
          </div>
        </div>
      </div>
      

    );
  };
  
  export default SignedOutHome;