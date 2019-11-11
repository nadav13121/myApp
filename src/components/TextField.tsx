import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#b0bac9',
        },
        '&:hover fieldset': {
          borderColor: '#919fb4',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#6b87b1',
        },
      },
    },
  })(TextField);

interface TextFieldProps {
    variant?: any;
    fullWidth?: boolean | undefined;
    required?: boolean | undefined;
    id?: any;
}



const MytextField: React.SFC<TextFieldProps> = ( {variant='outlined' ,fullWidth=true, required=false, id} ) => (
    <CssTextField  variant={variant} fullWidth={fullWidth} required={required} id={id}/>
 
);

export default MytextField;