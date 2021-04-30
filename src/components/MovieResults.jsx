export default function MovieResults(props) {
  const { movieList } = props
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];
  
  const parsedMovies = validatedMovies.map(movie => 
    <li key={movie.imdbID}>
      <p>{movie.Title} ({movie.Year})</p>
      <button data-testid="nominateBtn">
        {`Nominate ${movie.Title}`}
      </button>
    </li>
  )
  
  return (
    <section>
      {validatedMovies.length === 0 && <h3>No results for</h3>}
      {validatedMovies.length > 0 && <h2>Movie Results</h2>}
      <ul>
        {parsedMovies}
      </ul>
    </section>
  )
}