import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc5ade05eb3ff59fd0901c93cf668390&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=cc5ade05eb3ff59fd0901c93cf668390&query=';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      setMovies(data.results);
      setNotFound(false);
    } else {
      setMovies([]);
      setNotFound(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };

  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div>
      <header>
        <div className='input-section'>
          <input
            type='text'
            placeholder='Search movie'
            className='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </div>
      </header>
      <main>
        {notFound ? (
          <p className='error-msg'>No matching movie found.</p>
        ) : (
          movies.map((movie) => (
            <div className='search-card-container'>

<Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
              <div key={movie.id} className='movie-banner'>
                <img className='' src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
                <div className='movie-info'>
                  <h3>{movie.title}</h3>
                  <span className={getClassByRate(movie.vote_average)}>
                    {(movie.vote_average).toFixed(1)}
                    {<i className='fa-solid fa-star'></i>}
                  </span>
                </div>
                <div className='overview'>
                  <h3>Overview:</h3>
                  {movie.overview}
                </div>
              </div>
            </Link>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Search;
