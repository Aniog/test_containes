import React from 'react';

const CTAButton = ({ href, variant = 'primary', size = 'default', children, className = '' }) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold uppercase tracking-wide rounded transition-all no-underline';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white hover:opacity-90',
    secondary: 'bg-transparent border border-[#8159BB] text-[#8159BB] hover:bg-[#8159BB] hover:text-white',
    ghost: 'bg-transparent text-[#8159BB] hover:bg-[#8159BB]/10'
  };
  
  const sizes = {
    default: 'h-9 px-4 text-sm',
    large: 'h-11 px-6 text-base'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};

export default CTAButton;
