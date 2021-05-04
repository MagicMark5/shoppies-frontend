import parseListItems from "../helpers/parseListItems";
import makeStyles from "../styles/movieResultsStyle";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

export default function Nominations(props) {
  const classes = makeStyles();
  const { currentNominations, removeNomination } = props

  console.log(currentNominations);

  const handleRemoveNomination = (event) => {
    // get movie data from name prop of whichever element was clicked (either button or icon)
    const movie = event.target.name ? event.target.name : event.target.offsetParent.name;
    const copyNominations = [...currentNominations];
    const removeIndex = copyNominations.indexOf(movie);
    copyNominations.splice(removeIndex, 1);
    removeNomination([...copyNominations]);
  }  
  
  const parsedNominations = currentNominations.map((nomination) => {
    console.log(nomination);
    const movieData = JSON.parse(nomination);
    return parseListItems(movieData, handleRemoveNomination)
  });
  
  return (
    <section className="nominations">
      <Typography variant="h5" className={classes.title}>
        Nominations
      </Typography>
      <List>
        {parsedNominations}
      </List>
    </section>
  )
}