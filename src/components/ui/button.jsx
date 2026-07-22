import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-60';

  const variants = {
    default: 'bg-brand-accent text-white hover:bg-brand-accent-hover',
    outline: 'border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white',
    ghost: 'text-brand-ink hover:bg-brand-warm',
    link: 'text-brand-accent underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-11 px-6 text-sm',
    sm: 'h-9 px-4 text-xs',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export { Button };
