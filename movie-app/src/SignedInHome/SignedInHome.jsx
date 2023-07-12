import React, { useState, useEffect } from 'react';
import './SignedInHome.css';
import Chatbot from '../Chatbot/Chatbot';
import Watchlist from '../Watchlist/Watchlist';

const apiKey = "eed0e2d8cf492449f59a2b5688eca30b";
let pageNumber = 1;
const baseUrl = 'https://api.themoviedb.org/3/';

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

      const moviesResponse = await fetch(`${baseUrl}discover/movie?api_key=${apiKey}&with_genres=16`);
      const moviesData = await moviesResponse.json();
      setMovies(moviesData.results);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQwZTJkOGNmNDkyNDQ5ZjU5YTJiNTY4OGVjYTMwYiIsInN1YiI6IjY0OGM5MDNhYzJmZjNkMDEzOWFkNGQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9SSmYoi70K8GfjtiERXD3N2D8Cwf1pG3I0eH2Nb5mUw'
    }
  };

  async function fetchSearchedMovie(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    try {
      const moviesResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, options);
      const moviesData = await moviesResponse.json();
      setMovies(moviesData.results);
    } catch (error) {
      console.error('Error fetching searched movies:', error);
    }
  }

  return (
    <div>
      <header>
        <img src="../chatbot.png" alt="" />
        <form onSubmit={fetchSearchedMovie}>
          <input id='search-input' type="text" placeholder="Search..." />
          <button type="submit">Submit</button>
        </form>
      </header>
      <Chatbot />
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )}
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
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
