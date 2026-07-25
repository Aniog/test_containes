import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'btn-premium inline-flex items-center justify-center rounded-none font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-velmora-gold disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-velmora-base text-velmora-cream hover:bg-velmora-dark-gold',
    secondary: 'bg-transparent border border-velmora-base text-velmora-base hover:bg-velmora-base hover:text-velmora-cream',
    outline: 'bg-transparent border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-base',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;