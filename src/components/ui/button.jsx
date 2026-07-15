import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-brand-gold text-brand-bg hover:bg-brand-goldDark hover:shadow-lg',
    outline: 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-bg',
    ghost: 'text-brand-text hover:text-brand-gold',
    link: 'text-brand-gold underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
