import React from 'react';
import LoginForm from './LoginForm';
import Grid from '@material-ui/core/Grid';
import UseStyles from './UseStyles';
import Typography from '@material-ui/core/Typography';

const Login = () => {
    const classes = UseStyles();
    return (
        <Grid container direction='row' className={classes.root}>
            <Grid item xs={12} sm={8} md={8} lg={6}>

                <div className={classes.paper}>
                <Typography  variant="h2" component="h2">
                Sign in
                </Typography>
                <LoginForm />
                </div>

            </Grid>

            <Grid item xs={false} sm={4} md={4} lg={6} className='RightGrid'>
                <div className='RightGrid_div'/>
            </Grid>
        </Grid>
    )
};

export default Login;