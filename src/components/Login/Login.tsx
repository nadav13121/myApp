import React from 'react';
import LoginForm from './LoginForm';
import Grid from '@material-ui/core/Grid';

const Login = () => {
    return (
        <Grid container direction='row' className='root'>
            <Grid container xs={12} sm={6} md={6} lg={6} justify="center" alignItems="center">
                <div className='leftGrid_logo'/>
                <div className='container-div'>
                    <h2 className='login-title'>
                        Sign in
                    </h2>
                    <LoginForm />
                </div>
            </Grid>

            <Grid container xs={false} sm={6} md={6} lg={6} justify="center" alignItems="center" className='container-image'>
                <div className='Image'>
                </div>
            </Grid>
        </Grid>
    )
};

export default Login;