import React, { useState, useEffect } from 'react';
import './SignedInHome.css';
import Chatbot from '../Chatbot/Chatbot';
import Watchlist from '../Watchlist/Watchlist';

const SignedInHome = () => {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const usersResponse = await fetch('http://localhost:3000/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const moviesResponse = await fetch('http://localhost:3000/movies');
      const moviesData = await moviesResponse.json();
      setMovies(moviesData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  return (
    <div>
      <nav>
        <img src="../chatbot.png" alt="" />
        <input type="text" placeholder="Search..." />
        <input type="submit" value="Submit" />
      </nav>
      <Chatbot />
      <div id="movies-grid" className="container">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <div id="recommendations" className="recommendations">
        {/* Placeholder for recommended elements */}
      </div>
      <Watchlist />
    </div>
  );
};

export default SignedInHome;
