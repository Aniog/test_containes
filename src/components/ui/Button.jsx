import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'solid', size = 'md', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    solid: 'bg-[#C5A26F] text-white hover:bg-[#B08F5E] focus:ring-[#C5A26F]',
    outline: 'border border-[#C5A26F] text-[#C5A26F] hover:bg-[#C5A26F] hover:text-white focus:ring-[#C5A26F]',
    ghost: 'text-[#2C2522] hover:bg-[#F5F2ED] focus:ring-[#C5A26F]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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