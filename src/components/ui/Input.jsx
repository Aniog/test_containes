import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full border border-stone-300 bg-white px-4 py-2 text-sm font-sans text-charcoal placeholder:text-stone-400 transition-colors duration-200',
        'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };