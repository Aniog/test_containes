import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ 
  className,
  type = 'text',
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        `
        w-full px-4 py-3
        font-sans text-sm
        bg-[var(--color-warm-white)]
        border border-[var(--color-border)]
        text-[var(--color-text-primary)]
        placeholder:text-[var(--color-text-muted)]
        transition-all duration-200
        focus:outline-none focus:border-[var(--color-charcoal)] focus:ring-1 focus:ring-[var(--color-charcoal)]
        disabled:opacity-50 disabled:cursor-not-allowed
      `,
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;