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
    default: 'bg-[#B89778] text-white hover:bg-[#8B6F47] focus:ring-[#B89778]',
    outline: 'border border-[#B89778] text-[#B89778] hover:bg-[#B89778] hover:text-white focus:ring-[#B89778]',
    ghost: 'text-[#2C2825] hover:bg-[#F5F2ED] focus:ring-[#B89778]',
    link: 'text-[#B89778] underline-offset-4 hover:underline p-0 h-auto',
  };
  
  const sizes = {
    default: 'h-11 px-6 text-sm tracking-[0.5px]',
    sm: 'h-9 px-4 text-xs tracking-[0.5px]',
    lg: 'h-14 px-8 text-base tracking-[1px]',
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
