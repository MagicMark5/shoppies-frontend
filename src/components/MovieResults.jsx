import makeStyles from "../styles/movieResultsStyle";
import parseListItems from "../helpers/parseListItems";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';


export default function MovieResults(props) {
  const classes = makeStyles();
  const { movieList, currentNominations, handleNominateAction } = props
  const fiveSelected = currentNominations.length === 5 ? true : false;
  
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];

  // The onClick handler for each nominate movie IconButton 
  const nominateMovie = (event) => {
    const movie = event.target.offsetParent.name;
    handleNominateAction([...currentNominations, movie]);
  }

  // parse movies and conditionally enable buttons
  const parsedMovies = validatedMovies.map((movie) => {
    const isButtonDisabled = fiveSelected || currentNominations.includes(`${movie.Title} (${movie.Year})`) ? true : false;
    return parseListItems(movie, nominateMovie, isButtonDisabled);
  });
  
  return (
    <section className="results">
      {validatedMovies.length === 0 && <Typography variant="h5" className={classes.title}>No results for "{props.query}"</Typography>}
      {validatedMovies.length > 0 && <Typography variant="h5" className={classes.title}>Movie Results for "{props.query}"</Typography>}
      <div className={classes.demo}>
        <List>
          {parsedMovies}
        </List>
      </div>
    </section>
  )
}