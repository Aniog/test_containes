import React from 'react';

const Button = ({ 
  children, 
  variant = 'solid', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A46E] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    solid: 'bg-[#C5A46E] text-[#0F0E0C] hover:bg-[#B8976A] active:bg-[#A68B5B]',
    outline: 'border border-[#C5A46E] text-[#C5A46E] hover:bg-[#C5A46E] hover:text-[#0F0E0C]',
    ghost: 'text-[#2C2823] hover:bg-[#F5F2ED]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-sm tracking-[1px]',
    lg: 'px-10 py-4 text-base tracking-[1.5px]',
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