import { useState } from 'react'

export default function MovieForm(props) {
  const [movie, setMovie] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(movie);
    // make call to server with movie string (sanitize input?)
    // or pass submission to App 
    // reset input
    setMovie("")
  };

  const handleChange = event => setMovie(event.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="movie" 
        placeholder="Enter the movie name" 
        value={movie}
        onChange={handleChange}>
      </input>
      <button type="submit">Search</button>
    </form>
  )
}