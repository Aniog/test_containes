import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#C9A96E] text-white hover:bg-[#B8944F] focus:ring-[#C9A96E]',
    outline: 'border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white focus:ring-[#C9A96E]',
    ghost: 'text-[#1A1A1A] hover:text-[#C9A96E]',
    dark: 'bg-[#1A1A1A] text-white hover:bg-[#333] focus:ring-[#1A1A1A]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm tracking-wide',
    md: 'px-6 py-3 text-sm tracking-widest uppercase',
    lg: 'px-8 py-4 text-base tracking-widest uppercase',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
