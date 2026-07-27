import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light font-semibold transition-colors',
    accent: 'bg-accent text-white hover:bg-amber-600 font-semibold transition-colors',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-colors',
  };

  const sizes = {
    default: 'px-6 py-3 rounded-md',
    sm: 'px-4 py-2 rounded-md text-sm',
    lg: 'px-8 py-4 rounded-md text-lg',
  };

  return (
    <button
      ref={ref}
      className={cn(variants[variant], sizes[size], 'inline-flex items-center justify-center gap-2', className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;