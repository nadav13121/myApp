import React from 'react';
import Button from '@material-ui/core/Button';
import UseStyles from './UseStyles';


const LoginButton = () => {
  const classes = UseStyles();

  return (
      <Button size="large" fullWidth={true} variant="contained" color="primary" className={classes.submit}>
        Click me
              </Button>
  )
};

export default LoginButton;