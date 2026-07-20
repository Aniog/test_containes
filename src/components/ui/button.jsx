import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles =
    'inline-flex items-center justify-center uppercase tracking-widest text-xs font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold text-warm-charcoal hover:bg-gold/90 border border-gold',
    outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-warm-charcoal',
    ghost: 'bg-transparent text-warm-charcoal hover:bg-cream-dark border border-transparent',
    dark: 'bg-deep-dark text-cream hover:bg-deep-dark/90 border border-deep-dark',
  };

  const sizes = {
    sm: 'h-8 px-4 text-[10px]',
    default: 'h-11 px-8',
    lg: 'h-13 px-10 text-sm',
    icon: 'h-10 w-10',
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };