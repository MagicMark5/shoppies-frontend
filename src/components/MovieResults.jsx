import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
//import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: "inherit"
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function MovieResults(props) {
  const classes = useStyles();
  const { movieList, currentNominations, handleNominateAction } = props
  const fiveSelected = currentNominations.length === 5 ? true : false;
  
  const validatedMovies = Array.isArray(movieList) ? movieList : [];

  const generate = (element) => {
    return validatedMovies.map((movie) =>
      <ListItem key={`${movie.Title} (${movie.Year})`}>
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
            disabled={fiveSelected || currentNominations.includes(`${movie.Title} (${movie.Year})`) ? true : false}
            name={`${movie.Title} (${movie.Year})`} 
            data-testid="nominateBtn" 
            onClick={nominateMovie}>
            <Icon className="fas fa-trophy" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
  
  const nominateMovie = (event) => {
    const movie = event.target.offsetParent.name;
    handleNominateAction([...currentNominations, movie]);
  }
  
  return (
    <section className="results">
      {validatedMovies.length === 0 && <Typography variant="h5" className={classes.title}>No results for "{props.query}"</Typography>}
      {validatedMovies.length > 0 && <Typography variant="h5" className={classes.title}>Movie Results for "{props.query}"</Typography>}
      <div className={classes.demo}>
        <List>
          {generate()}
        </List>
      </div>
    </section>
  )
}