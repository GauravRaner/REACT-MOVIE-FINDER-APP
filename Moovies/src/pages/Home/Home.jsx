import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Popular from "../Popular"
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=cc5ade05eb3ff59fd0901c93cf668390'
        );
        const data = await response.json();
        setMovieData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={true}
      >
        {movieData.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
          <div key={movie.id} className="carousel">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}

            />
            <div className="  -mb-4 p-4 bg-gradient-to-b from-transparent to-black opacity-100 transition-opacity duration-300 carousel-text">
              <h1>{movie.title}</h1>
              <h2 >{movie.vote_average.toFixed(1)}<i className="fa-solid fa-star text-yellow-300"></i> |  {movie.original_language}  |  {movie.release_date}</h2>
              <p>{movie.overview}</p>
            </div>

          </div>
          </Link>
        ))}
      </Carousel>

      <Popular />

    </>

  );
};

export default Home;
