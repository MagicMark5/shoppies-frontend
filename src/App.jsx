import './App.css';
import MovieForm from './components/MovieForm';
import MovieResults from './components/MovieResults';
import Nominations from './components/Nominations';
//import useApplicationData from './hooks/useApplicationData'



function App() {
  //const { state, dispatch } = useApplicationData();

  //const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));

  return (
    <div className="App">
      <h1>Shoppies</h1>
      <MovieForm />
      <MovieResults />
      <Nominations />
    </div>
  );
}

export default App;
