import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const root = document.getElementById('root');
if (!root) throw new Error("No root element found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
