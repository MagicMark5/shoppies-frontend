import { useState } from 'react'

export default function MovieForm(props) {
  const [movie, setMovie] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    // make call to server with movie string (sanitize input?)
    // or pass submission to App 
    // reset input
    setMovie("")
  };

  const handleChange = event => {
    const value = event.target.value; 
    if (value.length <= 50) {
      setMovie(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="movie" 
        placeholder="Enter the movie name" 
        value={movie}
        onChange={handleChange}>
      </input>
      <button type="submit" data-testid="search">Search</button>
    </form>
  )
}