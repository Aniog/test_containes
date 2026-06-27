import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = 'solid', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    solid: 'bg-[#BFA46F] text-[#F8F5F0] hover:bg-[#A68B5B] focus:ring-[#BFA46F]',
    outline: 'border border-[#BFA46F] text-[#BFA46F] hover:bg-[#BFA46F] hover:text-[#F8F5F0] focus:ring-[#BFA46F]',
    ghost: 'text-[#1C1B18] hover:bg-[#F5F2ED] focus:ring-[#BFA46F]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm tracking-[0.5px]',
    lg: 'px-8 py-4 text-base tracking-[0.5px]',
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
