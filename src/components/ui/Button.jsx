import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'btn inline-flex items-center justify-center font-sans text-sm font-medium tracking-[0.04em] uppercase transition-all duration-250 whitespace-nowrap cursor-pointer';
  
  const variants = {
    primary: 'bg-[#B89778] text-white border border-[#B89778] hover:bg-[#8C6F52] hover:border-[#8C6F52]',
    outline: 'bg-transparent text-[#2C2825] border border-[#2C2825] hover:bg-[#2C2825] hover:text-[#F8F5F1]',
    gold: 'bg-transparent text-[#B89778] border border-[#B89778] hover:bg-[#B89778] hover:text-white',
  };

  const sizes = {
    default: 'px-8 py-3.5',
    sm: 'px-5 py-2.5 text-xs',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;