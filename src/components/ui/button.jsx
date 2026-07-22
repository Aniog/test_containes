import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-charcoal-800 text-white hover:bg-charcoal-700 shadow-gold': variant === 'default',
            'border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-white': variant === 'outline',
            'bg-gold-500 text-white hover:bg-gold-600 shadow-gold': variant === 'gold',
            'h-9 px-4 py-2': size === 'default',
            'h-10 px-8': size === 'lg',
            'h-8 px-3 text-xs': size === 'sm',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };