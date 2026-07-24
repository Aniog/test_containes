import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    accent: 'bg-accent text-white hover:bg-accent-hover',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'hover:bg-muted text-primary',
    link: 'underline-offset-4 hover:underline text-primary',
  };

  const sizes = {
    default: 'h-11 px-6 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-14 px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };
