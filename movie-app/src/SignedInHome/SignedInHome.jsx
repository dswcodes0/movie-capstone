import React, { useState, useEffect } from 'react';
import './SignedInHome.css';
import Chatbot from '../Chatbot/Chatbot';
import Watchlist from '../Watchlist/Watchlist';

const SignedInHome = () => {
  const [users, setUsers] = useState([]);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const usersResponse = await fetch('http://localhost:3002/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const animeResponse = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=eed0e2d8cf492449f59a2b5688eca30b&with_genres=16');
      const animeData = await animeResponse.json();
      setAnime(animeData.results);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  return (
    <div>
      <header>
        <img src="../chatbot.png" alt="" />
        <input type="text" placeholder="Search..." />
        <input type="submit" value="Submit" />
      </header>
      <Chatbot />
      <div className="anime-grid">
        {anime.map((anime) => (
          <div key={anime.id} className="anime-card">
            <img src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`} alt={anime.title} />
            <div className="anime-info">
              <h3>{anime.title}</h3>
              <p>Rating: {anime.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="recommendations">
        {/* Placeholder for recommended elements */}
      </div>
      <Watchlist />
    </div>
  );
};

export default SignedInHome;
