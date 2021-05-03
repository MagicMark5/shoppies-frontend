export default function MovieResults(props) {
  const { movieList, currentNominations, handleNominateAction } = props
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];
  
  const nominateMovie = (event) => {
    console.log(event.target.name);
    handleNominateAction([...currentNominations, event.target.name]);
  }
  
  const parsedMovies = validatedMovies.map(movie => 
    <li key={movie.Title}>
      <span>{movie.Title} ({movie.Year})</span>
      <button 
        disabled={currentNominations.includes(`${movie.Title} (${movie.Year})`) ? true : false}
        name={`${movie.Title} (${movie.Year})`} 
        data-testid="nominateBtn" 
        onClick={nominateMovie}>
          Nominate
      </button>
    </li>
  )
  
  return (
    <section className="results">
      {validatedMovies.length === 0 && <h3>No results for {props.query}</h3>}
      {validatedMovies.length > 0 && <h3>Movie Results</h3>}
      <ul>
        {parsedMovies}
      </ul>
    </section>
  )
}