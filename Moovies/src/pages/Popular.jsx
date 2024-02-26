import Card from '../components/Card/Card';
import '../../src/App.css'

const popularApiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=cc5ade05eb3ff59fd0901c93cf668390";

const Popular = () => {


  return (
    <>
    <div className='head'>
    <h1>Popular</h1>
    <Card apiUrl={popularApiUrl}/>
    </div>

    </>
  );
};

export default Popular;
