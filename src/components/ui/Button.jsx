import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  disabled,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'btn';
  const variantStyles = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    gold: 'btn-gold',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;