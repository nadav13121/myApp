import React from 'react';
import Button from '../Button';
import MytextField from '../TextField';


const LoginForm = () => {
  return (
    <form >
      <p className='input-title'>Full Name</p>
      <MytextField id="Fname"  variant="outlined"/>

      <p className='input-title'>Email</p>
      <MytextField id="Email"  variant="outlined"/>

      <p className='input-title'>password</p>
      <MytextField id="Password"  variant="outlined"/>

      <Button size={'large'} info={'Log In'} MyClass={'login-button'} />
    </form>
  )
};

export default LoginForm;