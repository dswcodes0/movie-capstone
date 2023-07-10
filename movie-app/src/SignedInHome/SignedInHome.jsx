import React from 'react';
import './SignedInHome.css';
import Chatbot from '../Chatbot/Chatbot';
import Watchlist from '../Watchlist/Watchlist';

const SignedInHome = () => {
    return (
      <div>
      <nav>
        <img src="../chatbot.png" alt="" />
        <input type="text" placeholder="Search..." />
        <input type="submit" value="Submit" />
      </nav>
      <Chatbot/>
      <div id="movies-grid" className="container">
      {/* Placeholder for movie elements */}
      </div>
      <div id='recommendations' className="recommendations">
        {/* Placeholder for recommended elements */}
      </div>
      <Watchlist/>
      

      </div>
      
    );
  };
  
  export default SignedInHome;