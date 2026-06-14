import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-brand-navy text-white hover:bg-brand-charcoal',
    outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
    gold: 'bg-brand-bronze text-white hover:bg-brand-gold',
    ghost: 'text-brand-navy hover:bg-brand-light',
  };
  
  const sizes = {
    default: 'h-11 px-6 py-2 text-sm',
    lg: 'h-12 px-8 py-3 text-base',
    sm: 'h-9 px-4 py-1.5 text-sm',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };
