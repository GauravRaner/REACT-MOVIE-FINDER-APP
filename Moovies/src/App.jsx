import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TopRated from "./pages/TopRated"
import Upcoming from "./pages/Upcoming"
import Popular from "./pages/Popular"
import People from "./pages/People/People"
import Hindi from "./pages/Hindi"
import Search from "./components/Search/Search"
import Movie from "./components/MovieDetails/Movie"


function App() {

  return (
    <>
    

      <Router>
        <Header/>
 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/top_rated" element={<TopRated/>}/>
          <Route path="/upcoming" element={<Upcoming />}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/hindi" element={<Hindi/>}/>
          <Route path="/search" element={<Search/>} />
          <Route path="/movie/:id" element={<Movie />} />

          </Routes> 

      </Router>

    </>
  );
}

export default App




