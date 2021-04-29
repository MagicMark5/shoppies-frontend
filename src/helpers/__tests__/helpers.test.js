import {
  nominateMovie, 
  removeNomination, 
  listMovieResults
} from '../helpers'

describe('listMovieResults basic tests', () => {

  it('returns null if input is invalid', () => {
    const result = listMovieResults(null);

    expect(result).toBeNull();
  });

  it('returns an unordered list when given movie data', () => {

  });

});