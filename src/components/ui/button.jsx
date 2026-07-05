import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center font-sans font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/40 disabled:opacity-60 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-brand-accent text-white hover:bg-brand-accentHover',
    outline: 'border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white',
    ghost: 'text-brand-ink hover:bg-brand-warm',
    subtle: 'bg-brand-warm text-brand-ink hover:bg-brand-goldLight',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
  };

  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
});

Button.displayName = 'Button';
export default Button;
