import Card from '../components/Card/Card';
import '../../src/App.css'

const popularApiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=cc5ade05eb3ff59fd0901c93cf668390&language=hi&sort_by=popularity.desc&with_original_language=hi";

const Hindi = () => {


  return (
    <>
    <div className='head'>
    <h1>Hindi</h1>
    <Card apiUrl={popularApiUrl}/>
    </div>
    </>
  );
};

export default Hindi;
