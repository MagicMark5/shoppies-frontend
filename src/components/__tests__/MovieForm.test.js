import { render, fireEvent } from '@testing-library/react'
import MovieForm from '../MovieForm'

describe('MovieForm basic functionality', () => {

  it('Allows a user to enter a movie as input which is reflected by the state', () => {
    const result = render(<MovieForm />)
    const { queryByDisplayValue, getByPlaceholderText } = result

    const input = getByPlaceholderText("Enter the movie name")

    fireEvent.click(input)
    fireEvent.change(input, { target: { value: "spiderman"} })

    const spiderman = queryByDisplayValue("spiderman")

    expect(spiderman).toBeInTheDocument()
  })
  

})