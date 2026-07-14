import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef(({
  label,
  error,
  className,
  type = 'text',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full px-4 py-3 bg-secondary border border-border rounded-none',
          'text-text-primary placeholder:text-text-secondary/60',
          'transition-all duration-200',
          'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20',
          error && 'border-error focus:border-error focus:ring-error/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-error">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
