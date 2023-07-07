import React from 'react';
import './SignedInHome.css';

const SignedInHome = () => {
    return (
      <div>
      <nav>
        <img src="../chatbot.png" alt="" />
        <input type="text" placeholder="Search..." />
        <input type="submit" value="Submit" />
      </nav>
      <div className="chatbot">
        <div className="chatbot-img">
          <h1>How can I help?</h1>
          <img src="../chatbot.png" alt="" />
          <input type="text" placeholder="Ask me a question..." />
          <input type="submit" value="Submit" />
        </div>
      </div>
      <div id="movies-grid" className="container">
      {/* Placeholder for movie elements */}
      </div>
      <div id='recommendations' className="recommendations">
        {/* Placeholder for recommended elements */}
      </div>
      <div id='watchlist' className="watchlist">
        {/* Placeholder for watchlist/history elements */}
      </div>

      </div>
      
    );
  };
  
  export default SignedInHome;