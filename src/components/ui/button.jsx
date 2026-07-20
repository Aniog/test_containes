import React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-brand-accent text-white hover:bg-brand-accentHover',
  outline: 'border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white',
  ghost: 'text-brand-ink hover:bg-brand-warm',
  link: 'text-brand-accent underline-offset-4 hover:underline'
};

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const sizeClasses = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-8 text-base'
  };

  return (
    <button
      className={cn(baseClasses, buttonVariants[variant], sizeClasses[size], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
