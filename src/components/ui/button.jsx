import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    default: 'bg-[#C5A46E] text-[#0F0E0C] hover:bg-[#A68B5B] focus:ring-[#C5A46E]',
    outline: 'border border-[#C5A46E] text-[#C5A46E] hover:bg-[#C5A46E] hover:text-[#0F0E0C] focus:ring-[#C5A46E]',
    ghost: 'text-[#2C2A26] hover:bg-[#F5F2EB] focus:ring-[#C5A46E]',
    link: 'text-[#C5A46E] underline-offset-4 hover:underline p-0 h-auto',
  };
  
  const sizes = {
    default: 'h-11 px-6 text-sm tracking-[1px]',
    sm: 'h-9 px-4 text-xs tracking-[1px]',
    lg: 'h-14 px-8 text-base tracking-[1.5px]',
    icon: 'h-10 w-10',
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

export { Button };
