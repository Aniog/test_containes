import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-foreground text-white hover:bg-[#333333]',
    outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-white',
    ghost: 'bg-transparent text-foreground hover:bg-black/5',
  };

  return (
    <button
      className={`px-8 py-3 text-sm font-sans tracking-widest uppercase transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
