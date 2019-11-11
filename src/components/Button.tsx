import React from 'react';
import Button from '@material-ui/core/Button';

interface ButtonProps {
  size?: 'large' | 'medium' | 'small' | undefined;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  color?: 	'default' | 'inherit' | 'primary' | 'secondary' | undefined;
  fullWidth?: boolean;
  info?: string;
  MyClass?: string;
}

const button: React.SFC<ButtonProps> = ({ size = 'large', variant = 'contained', color = 'primary', info = 'Click me' , MyClass = ''}) => (
  <Button size={size} fullWidth={true} variant={variant} color={color} className={MyClass} >
    {info}
  </Button>
);


export default button;