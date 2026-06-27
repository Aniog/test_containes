import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  onClick, 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'btn inline-flex items-center justify-center transition-all';
  
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    gold: 'btn-gold',
  };
  
  const sizes = {
    default: '',
    sm: 'btn-sm',
  };
  
  const classes = [
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || '',
    className,
    disabled ? 'opacity-50 cursor-not-allowed' : '',
  ].filter(Boolean).join(' ');
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;