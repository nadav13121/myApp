
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles(theme => ({
    root: {
       height: '100vh',
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(-2),
      textAlign: 'center',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  export default UseStyles;