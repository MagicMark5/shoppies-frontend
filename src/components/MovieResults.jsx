import makeStyles from "../styles/movieResultsStyle";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';



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
  const parseMovies = () => {
    return validatedMovies.map((movie) => {
      const disableBtn = fiveSelected || currentNominations.includes(`${movie.Title} (${movie.Year})`) ? true : false;
      const buttonColour = disableBtn ? "default" : "primary";
      return <ListItem key={`${movie.Title} (${movie.Year})`}>
              <ListItemAvatar>
                <Avatar>
                  <Icon className="fas fa-film" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${movie.Title} (${movie.Year})`}/>
              <ListItemSecondaryAction>
                <IconButton 
                  edge="end" 
                  aria-label="add"
                  disabled={disableBtn}
                  name={`${movie.Title} (${movie.Year})`} 
                  data-testid="nominateBtn" 
                  onClick={nominateMovie}>
                  <Icon className="fas fa-trophy" color={buttonColour} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
    });
  }
  

  
  return (
    <section className="results">
      {validatedMovies.length === 0 && <Typography variant="h5" className={classes.title}>No results for "{props.query}"</Typography>}
      {validatedMovies.length > 0 && <Typography variant="h5" className={classes.title}>Movie Results for "{props.query}"</Typography>}
      <div className={classes.demo}>
        <List>
          {parseMovies()}
        </List>
      </div>
    </section>
  )
}