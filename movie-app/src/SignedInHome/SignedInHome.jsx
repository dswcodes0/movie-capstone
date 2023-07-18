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
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const usersResponse = await fetch('http://localhost:3002/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const moviesResponse = await fetch(`${baseUrl}discover/movie?api_key=${apiKey}&with_genres=16&page=${pageNumber}`);
      const moviesData = await moviesResponse.json();
      setMovies((prevMovies) => [...prevMovies, ...moviesData.results]);

      if (moviesData.total_pages <= pageNumber) {
        setLoadMoreVisible(false);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  const loadMoreMovies = () => {
    pageNumber++;
    fetchData();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const searchResponse = await fetch(`${baseUrl}search/movie?api_key=${apiKey}&query=${searchQuery}`);
      const searchData = await searchResponse.json();
      setSearchResults(searchData.results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  return (
    <div>
      <header>
        <h1 className="logo-text">Watcher</h1>
        <form onSubmit={handleSearch}>
          <input id='search-input' type="text" placeholder="Search..." value={searchQuery} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </header>
      <Chatbot />
      <div className="movie-grid">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <div key={movie.id} className="movie-card">
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              )}
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))
        ) : (
          movies.map((movie, index) => (
            <div key={index} className="movie-card">
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              )}
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {loadMoreVisible && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={loadMoreMovies}>Load More</button>
        </div>
      )}
      <div className="recommendations"></div>
      <Watchlist />
    </div>
  );
};

export default SignedInHome;
