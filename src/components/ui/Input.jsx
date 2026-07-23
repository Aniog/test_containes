import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Input = forwardRef(({
  className,
  type = 'text',
  error,
  label,
  placeholder,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-charcoal mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        className={cn(
          'w-full h-11 px-4 bg-ivory border border-sand rounded-sm',
          'text-charcoal placeholder:text-taupe',
          'transition-all duration-300',
          'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/30',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
