import React from 'react';
import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    'outline-gold': 'btn btn-outline-gold',
  };

  const sizes = {
    default: '',
    sm: 'btn-sm',
  };

  return (
    <button
      type={type}
      className={cn(variants[variant], sizes[size], className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
