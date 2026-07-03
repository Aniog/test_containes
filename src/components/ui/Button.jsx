import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-ink text-white hover:bg-[#292524]',
    outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
    accent: 'bg-accent text-white hover:bg-[#9a7209]',
    ghost: 'text-ink-secondary hover:text-ink',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
