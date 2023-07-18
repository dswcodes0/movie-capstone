import React from 'react';
import { Link } from 'react-router-dom';
import './SignedOutHome.css';

const SignedOutHome = () => {
  return (
    <div className="main">
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
        <h1 className="title">Welcome to the Watcher!</h1>
        <div className="watcher">
            <img src="../chatbot.png" alt="" />
        </div>
        <button className="watcher-btn">Ask the Watcher</button>
        <div className="features">
          <div className="feature">
            <h3>Recommendations</h3>
            <p>Get personalized recommendations based on your watch history</p>
          </div>
          <div className="feature">
            <h3>Trailers</h3>
            <p>Get HD trailers for any show you would like to view</p>
          </div>
          <div className="feature">
            <h3>Saved Progress</h3>
            <p>Don't worry about saving anything, it'll all be here. Just browse, we do the rest.</p>
          </div>
        </div>
        <div>
          <Link to="/SignedInHome" className="go-home">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default SignedOutHome;
