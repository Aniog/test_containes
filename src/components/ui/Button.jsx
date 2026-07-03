import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center transition-all duration-300 ease-velmora focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-gold text-base hover:bg-gold-light shadow-gold hover:shadow-soft-lg',
      outline:
        'border border-base/10 text-ink hover:border-gold hover:text-gold bg-transparent',
      ghost: 'text-ink hover:text-gold bg-transparent',
      dark: 'bg-base text-surface hover:bg-base-soft',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs tracking-widest-xl uppercase',
      md: 'px-6 py-3 text-xs tracking-widest-xl uppercase',
      lg: 'px-8 py-4 text-sm tracking-widest-xl uppercase',
    };

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
