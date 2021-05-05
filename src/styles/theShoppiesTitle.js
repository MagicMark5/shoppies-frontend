import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  background: {
    backgroundColor: "inherit"
  },
  title: {
    margin: theme.spacing(4, 2, 1),
    padding: theme.spacing(3, 2, 1)
  },
}));

