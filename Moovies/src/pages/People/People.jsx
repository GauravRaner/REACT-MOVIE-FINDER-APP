import React from 'react'
import  { useEffect, useState } from 'react';
import './People.css'
import { Link } from 'react-router-dom';

const apiUrl="https://api.themoviedb.org/3/trending/person/week?api_key=cc5ade05eb3ff59fd0901c93cf668390"


const People = () => {
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
  }, []);
  return (
    <>
    <div className='head'>
    <h1>People</h1>
    
    <div className='people-card-container'>
        {data.map((item) => (
          <Link to={`/PersonDetails/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
          <div className='people-card' key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />
            <div className='people-card-text -mb-4 p-4 bg-gradient-to-b from-transparent to-black opacity-100 transition-opacity duration-400'>
              <h2>{item.name}</h2>
              <p >{item.known_for_department}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>

    
    
    </>
  );
};

export default People;
