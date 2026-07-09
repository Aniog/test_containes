import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false 
}) => {
  const variants = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    accent: 'btn btn-accent',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;