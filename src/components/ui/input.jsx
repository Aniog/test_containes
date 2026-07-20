import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full border border-beige bg-surface px-4 py-2 text-sm text-warm-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors duration-300',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };