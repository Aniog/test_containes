import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'default',
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-light focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md',
    secondary: 'bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
    accent: 'bg-bronze-light text-white hover:bg-bronze shadow-md hover:shadow-lg',
    ghost: 'bg-transparent text-navy-900 hover:bg-navy-900/5',
  };

  const sizes = {
    default: 'h-12 px-8 text-base',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-14 px-10 text-lg',
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