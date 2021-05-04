import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export default function parseListItems(movie, clickHandler, currentNominations = [], fiveSelected = false) {
  const { Title, Year, Poster } = movie;
  const movieData = { Title, Year, Poster }
  const movieString = JSON.stringify(movieData);
  const isButtonDisabled = fiveSelected || currentNominations.includes(movieString) ? true : false;

  return (<ListItem key={`${Title} (${Year})`}>
          <ListItemAvatar>
            <Avatar>
              <Icon className="fas fa-film" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${Title} (${Year})`}/>
          <ListItemSecondaryAction>
            <IconButton 
              edge="end" 
              aria-label="add"
              disabled={isButtonDisabled}
              name={movieString} 
              data-testid="nominateBtn" 
              onClick={clickHandler}>
              <Icon className="fas fa-trophy" name={movieString}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>);
}