import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import MovieForm from './components/MovieForm';
import MovieResults from './components/MovieResults';
import Nominations from './components/Nominations';
//import useApplicationData from './hooks/useApplicationData'



function App() {
  //const { state, dispatch } = useApplicationData();
  //const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));
  const [currentMovie, setCurrentMovie] = useState("")

  const updateMovieResults = (movieName) => {
    setCurrentMovie(movieName)
    console.log("MOVIE NAME FROM APP: ", movieName);
    // ask for the data from server on App re-render
  }

  useEffect(() => {
    if (currentMovie) {
      axios.post('/api/movies', { movie: currentMovie })
      .then(res => {
        console.log(res.data.Search);
      })
      .catch(e => {
        console.log(e)
        setCurrentMovie(null)
      })
    }
  }, [currentMovie])

  

  return (
    <div className="App">
      <h1>Shoppies</h1>
      <MovieForm handleSubmitAction={setCurrentMovie} />
      <MovieResults />
      <Nominations />
    </div>
  );
}

export default App;
