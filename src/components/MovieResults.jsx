export default function MovieResults(props) {
  const { movieList } = props
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];
  
  const parsedMovies = validatedMovies.map(movie => 
    <li key={movie.Title}>
      <span>{movie.Title} ({movie.Year})</span>
      <button data-testid="nominateBtn">Nominate</button>
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