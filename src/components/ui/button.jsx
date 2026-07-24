import React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-ink text-white hover:bg-accent',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
  ghost: 'text-ink hover:bg-surface-alt',
  accent: 'bg-accent text-white hover:bg-accent-soft',
};

const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-full font-ui font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(base, buttonVariants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
