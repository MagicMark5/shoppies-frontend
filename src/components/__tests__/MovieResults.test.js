import { render } from '@testing-library/react'
import MovieResults from '../MovieResults'

describe('MovieResults basic functionality', () => {

  it('Shows "No results for" message when given invalid input', () => {
    const result = render(<MovieResults />)
    const element = result.queryByText("No results for")

    expect(element).toBeInTheDocument()
  })

  it('Shows a list of buttons when given a list of movies', () => {
    const listOfMovies = ["Rambo", "Greese", "Lion King", "Finding Nemo"]

    const { queryByText, queryAllByTestId } = render(<MovieResults movieList={listOfMovies} />)

    const heading = queryByText("Movie Results")
    expect(heading).toBeInTheDocument()

    const nominateBtns = queryAllByTestId("nominateBtn")

    expect(nominateBtns.length).toBe(4);

    for (const movie of listOfMovies) {
      const movieButton = queryByText(`Nominate ${movie}`)
      expect(movieButton).toBeInTheDocument()
    }
  })
  
})