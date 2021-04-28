import './App.css';
import MovieForm from './components/MovieForm';
import MovieResults from './components/MovieResults';
import Nominations from './components/Nominations';


function App() {
  return (
    <div className="App">
      <MovieForm />
      <MovieResults />
      <Nominations />
    </div>
  );
}

export default App;
