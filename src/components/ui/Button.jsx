import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    'outline-light': 'btn-outline-light',
  };
  const sizeClasses = {
    default: '',
    sm: 'btn-sm',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant] || ''} ${sizeClasses[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;