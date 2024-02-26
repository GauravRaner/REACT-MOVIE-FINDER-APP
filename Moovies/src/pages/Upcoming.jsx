import Card from '../components/Card/Card';
import '../../src/App.css'

const upcomingApiUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=cc5ade05eb3ff59fd0901c93cf668390";

const Upcoming = () => {


  return (
    <>
    <div className='head'>
    <h1>Upcoming</h1>
    <Card apiUrl={upcomingApiUrl}/>
    </div>

    </>
  );
};

export default Upcoming;
