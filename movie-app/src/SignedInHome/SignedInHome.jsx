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
      const usersResponse = await fetch('http://localhost:3002/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eed0e2d8cf492449f59a2b5688eca30b');
      const moviesData = await moviesResponse.json();
      setMovies(moviesData.results);
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
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
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
