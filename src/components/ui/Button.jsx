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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm';
  
  const variants = {
    primary: 'bg-[#C9A962] text-[#1A1A1A] hover:bg-[#B8956C] active:scale-[0.98]',
    secondary: 'bg-transparent border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A1A] active:scale-[0.98]',
    ghost: 'bg-transparent text-[#1A1A1A] hover:text-[#C9A962]',
    dark: 'bg-[#1A1A1A] text-[#FAF7F2] hover:bg-[#2a2a2a] active:scale-[0.98]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    full: 'px-6 py-4 text-base w-full'
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
