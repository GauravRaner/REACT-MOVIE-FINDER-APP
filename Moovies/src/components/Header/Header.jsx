import logo from '../../assets/MovieLogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [showNavElements, setShowNavElements] = useState(false);

  const toggleNavElements = () => {
    setShowNavElements(!showNavElements);
  };
  const closeNav = () => {
    setShowNavElements(false);
  };
  

  return (
    <>
      <nav className='nav'> 
        <div className='nav-logo'>
          <Link to="/"><img src={logo}  alt="" /></Link>
        </div>

        <div className={`${showNavElements ? 'nav-active' : 'nav-elements'}`}>
          <li> <Link to="/popular" style={{ textDecoration: "none" }} onClick={closeNav}><span>Popular</span></Link></li>
          <li><Link to="/top_rated" style={{ textDecoration: "none" }} onClick={closeNav}><span>Top Rated</span></Link></li>
          <li><Link to="/upcoming" style={{ textDecoration: "none" }} onClick={closeNav}><span>Upcoming</span></Link></li>
          <li><Link to="/people" style={{ textDecoration: "none" }} onClick={closeNav}><span>People</span></Link></li>
          <li><Link to="/hindi" style={{ textDecoration: "none" }} onClick={closeNav}><span>Hindi</span></Link></li>
          <li><Link to="/search" style={{ textDecoration: "none" }} onClick={closeNav}><span>Search</span></Link></li>
        </div>

        <div className='nav-bar' onClick={toggleNavElements}>
        {showNavElements ? (
          <i className="fa-solid fa-times"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      </nav>
      


    </>
  )
}

export default Header