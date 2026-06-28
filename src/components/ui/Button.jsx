import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = 'solid', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    solid: 'bg-[#B89778] text-white hover:bg-[#A17C52] focus:ring-[#B89778]',
    outline: 'border border-[#B89778] text-[#B89778] hover:bg-[#B89778] hover:text-white focus:ring-[#B89778]',
    ghost: 'text-[#1C1C1C] hover:bg-[#F5F2ED] focus:ring-[#B89778]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-sm tracking-[1px]',
    lg: 'px-10 py-4 text-base tracking-[1.5px]',
  };
  
  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
