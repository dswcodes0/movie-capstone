import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="chatbot-img">
        <h1>How can I help?</h1>
        <img src="../chatbot.png" alt="" />
        <input type="text" placeholder="Ask me a question..." />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default Chatbot;
