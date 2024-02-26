
import Card from '../components/Card/Card';
import '../../src/App.css'

const topRatedApiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc5ade05eb3ff59fd0901c93cf668390";

const Toprated = () => {


  return (
    <>
    <div className='head'>
    <h1>Top Rated</h1>
    <Card apiUrl={topRatedApiUrl}/>
    </div>
    
    </>
  );
};

export default Toprated;

