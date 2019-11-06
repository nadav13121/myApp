import React from 'react';
import LoginButton from './LoginButton';
import UseStyles from './UseStyles';
import { TextField } from '@material-ui/core';


const LoginForm = () => {
    const classes = UseStyles();
    return (
    <div className={classes.paper}>
            <form className={classes.form} noValidate>
                <h2>Full Name</h2>
                <TextField id="Fname" className={classes.textField} label="Full Name"
                     margin="normal"
                />
                <h2>Email</h2>
                 <TextField id="email" className={classes.textField} label="email"
                     margin="normal"
                />
                <h2>password</h2>
                <TextField id="password" className={classes.textField} label="password"
                     margin="normal"
                />
                <LoginButton/>
            </form>
    </div>
    )
    };

export default LoginForm;