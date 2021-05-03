export default function MovieResults(props) {
  const { movieList, currentNominations, handleNominateAction } = props
  const fiveSelected = currentNominations.length === 5 ? true : false;
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];
  
  const nominateMovie = (event) => {
    const movie = event.target.name;
    handleNominateAction([...currentNominations, movie]);
  }
  
  const parsedMovies = validatedMovies.map(movie => 
    <li key={`${movie.Title} (${movie.Year})`}>
      <span>{movie.Title} ({movie.Year})</span>
      <button 
        className="fas fa-trophy"
        disabled={fiveSelected || currentNominations.includes(`${movie.Title} (${movie.Year})`) ? true : false}
        name={`${movie.Title} (${movie.Year})`} 
        data-testid="nominateBtn" 
        onClick={nominateMovie}>
      </button>
    </li>
  )
  
  return (
    <section className="results">
      {validatedMovies.length === 0 && <h3>No results for "{props.query}"</h3>}
      {validatedMovies.length > 0 && <h3>Movie Results</h3>}
      <ul>
        {parsedMovies}
      </ul>
    </section>
  )
}