import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export default function parseListItems(movie, clickHandler, isButtonDisabled = false) {
  return (<ListItem key={`${movie.Title} (${movie.Year})`}>
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
              disabled={isButtonDisabled}
              name={`${movie.Title} (${movie.Year})`} 
              data-testid="nominateBtn" 
              onClick={clickHandler}>
              <Icon className="fas fa-trophy"/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>);
}