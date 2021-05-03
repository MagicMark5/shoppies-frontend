import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss';
import MovieForm from './components/MovieForm';
import MovieResults from './components/MovieResults';
import Nominations from './components/Nominations';
//import useApplicationData from './hooks/useApplicationData'



function App() {
  //const { state, dispatch } = useApplicationData();
  //const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));
  const [currentMovie, setCurrentMovie] = useState("")
  const [currentResults, setCurrentResults] = useState([])
  
  useEffect(() => {
    if (currentMovie) {
      // post query to shoppies-backend on App re-render
      axios.post('/api/movies', { movie: currentMovie })
      .then(res => {
        const movieArray = res.data.Search;
        setCurrentResults(movieArray);
      })
      .catch(e => {
        console.log(e)
        setCurrentMovie(null)
      })
    }
  }, [currentMovie])

  

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <MovieForm handleSubmitAction={setCurrentMovie} />
      <section className="results-nominations">
        <MovieResults movieList={currentResults} query={currentMovie}/>
        <Nominations />
      </section>
    </div>
  );
}

export default App;
