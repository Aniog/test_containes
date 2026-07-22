import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center transition-all duration-300 ease-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-ink text-surface hover:bg-accent hover:text-white border border-transparent',
      outline:
        'bg-transparent text-ink border border-ink hover:bg-ink hover:text-surface',
      ghost: 'bg-transparent text-ink hover:bg-accent-soft',
      accent: 'bg-accent text-white hover:bg-ink border border-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs tracking-widest uppercase',
      md: 'px-6 py-3 text-xs tracking-widest uppercase',
      lg: 'px-8 py-4 text-sm tracking-widest uppercase',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
