import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-md border border-brand-steel/30 bg-white px-4 py-2 text-sm text-brand-charcoal placeholder:text-brand-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
