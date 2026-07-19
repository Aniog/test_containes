import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 font-sans font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variant === 'default' &&
            'bg-brand-gold text-white hover:bg-brand-gold-dark shadow-sm',
          variant === 'outline' &&
            'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white',
          variant === 'ghost' &&
            'text-brand-charcoal hover:text-brand-gold hover:bg-brand-light',
          size === 'default' && 'h-12 px-8 text-sm tracking-widest uppercase',
          size === 'sm' && 'h-9 px-4 text-xs tracking-wider uppercase',
          size === 'lg' && 'h-14 px-12 text-sm tracking-widest uppercase',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };