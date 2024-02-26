import React from 'react'
import {SkeletonTheme} from 'react-loading-skeleton'
import Skeleton from 'react-loading-skeleton';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({apiUrl}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data); 
        setData(data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
  
    getData();
  }, [apiUrl]);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 1500)
  }, []) 
  return (
    <>
     {
        isLoading
        ?
        <div className="cards">
          <div className="">
            <SkeletonTheme color="text-gray-800" highlightColor="text-gray-400" >
              <Skeleton height={300} duration={2} />
            </SkeletonTheme>
         </div>
      </div>

        :
      <div className='card-container'>
        {data.map((item) => (
          <Link to={`/movie/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
          <div className='movie-card' key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt=""  />
            <div className=' left-4 p-4 bg-gradient-to-b from-transparent to-black opacity-100 transition-opacity  card-text'>
              <h2>{item.title}</h2>
              <p>{item.vote_average.toFixed(1)}<i className="fa-solid fa-star"></i></p>
              <span >{item.overview}</span>
            </div>
          </div>
          </Link>

        ))}
      </div>
}
    
    </>
  )
}

export default Card