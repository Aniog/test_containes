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
  const baseStyles = 'btn inline-flex items-center justify-center transition-all duration-300';
  
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    gold: 'btn-gold',
  };
  
  const sizes = {
    default: '',
    sm: 'btn-sm',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;