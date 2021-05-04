import makeStyles from "../styles/movieResultsStyle";
import parseListItems from "../helpers/parseListItems";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';


export default function MovieResults(props) {
  const classes = makeStyles();
  const { movieList, currentNominations, handleNominateAction } = props
  const fiveSelected = currentNominations.length === 5 ? true : false;
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];

  // Conditionally render results heading
  const resultHeading = validatedMovies.length > 0 ? `Results for "${props.query}"` : `No Results for "${props.query}" 🤷🏽‍♂️` 

  // The onClick handler for each nominate movie IconButton 
  const nominateMovie = (event) => {
    // get movie data from name prop of whichever element was clicked (either button or icon)
    const movie = event.target.name ? event.target.name : event.target.offsetParent.name;
    handleNominateAction([...currentNominations, movie]);
  }

  // parse movies and conditionally enable buttons
  const parsedMovies = validatedMovies
    .map(movie => parseListItems(movie, nominateMovie, currentNominations, fiveSelected));
  
  return (
    <section className="results">
      <Typography variant="h5" className={classes.title}>{resultHeading}</Typography>
      <div className={classes.demo}>
        <List>
          {parsedMovies}
        </List>
      </div>
    </section>
  )
}