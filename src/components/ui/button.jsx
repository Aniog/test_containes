import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center whitespace-nowrap rounded-full font-sans text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

    const variants = {
      default:
        'bg-gold-500 text-white hover:bg-gold-600 shadow-soft',
      outline:
        'border border-base-300 bg-transparent text-ink hover:border-gold-500 hover:text-gold-600',
      ghost:
        'text-ink hover:bg-base-100',
      accent:
        'bg-ink text-cream hover:bg-base-800',
    };

    const sizes = {
      default: 'h-11 px-6',
      sm: 'h-9 px-4 text-xs',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10',
    };

    return (
      <button
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
