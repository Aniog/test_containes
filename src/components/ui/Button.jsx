import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-velmora-gold text-velmora-black hover:bg-velmora-gold-hover",
    secondary: "bg-transparent border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-black",
    ghost: "bg-transparent text-velmora-text hover:text-velmora-gold",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    full: "w-full px-6 py-4 text-base",
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