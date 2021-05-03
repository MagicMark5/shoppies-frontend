import { render, fireEvent } from '@testing-library/react'
import MovieForm from '../MovieForm'

describe('MovieForm basic functionality', () => {

  it('Allows a user to enter a movie as input', () => {
    // Setup: render component and get input inside form
    const result = render(<MovieForm />)
    const { queryByDisplayValue, getByPlaceholderText } = result
    const input = getByPlaceholderText("Enter the movie name")
    // Action: click input to select the element and fire change event to change value
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: "spiderman"} })
    // Evaluate and expect to see entered value
    const spiderman = queryByDisplayValue("spiderman")
    expect(spiderman).toBeInTheDocument()
  })

  it('Resets/clears the value of the input after Search button is clicked', () => {
    const mockHandleSubmit = () => console.log("submit handled");

    const result = render(<MovieForm handleSubmitAction={mockHandleSubmit}/>)
    const { queryByDisplayValue, getByPlaceholderText, getByTestId } = result
    const input = getByPlaceholderText("Enter the movie name")
    const button = getByTestId("search")
    // Action: enter input and click Search button
    fireEvent.click(input)
    fireEvent.change(input, { 
        target: { 
          value: "Lala Land"
        } 
      })
    const lalaLand = queryByDisplayValue("Lala Land")
    expect(lalaLand).toBeInTheDocument()
    // click search and submit form 
    fireEvent.click(button)
    const lalaLandAfterSearch = queryByDisplayValue("Lala Land")
    // Evaluate and expect input to be empty
    expect(lalaLandAfterSearch).not.toBeInTheDocument()
    expect(input.value.length).toBe(0)
  })
  

})