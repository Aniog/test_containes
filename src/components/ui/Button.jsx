import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
  const variants = {
    primary: 'bg-velmora-charcoal text-white hover:bg-velmora-taupe',
    outline: 'border border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white',
    ghost: 'bg-transparent text-velmora-charcoal hover:bg-velmora-charcoal/5',
    accent: 'bg-velmora-gold text-white hover:bg-velmora-goldLight',
  };

  const sizes = {
    default: 'px-8 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-10 py-4 text-base',
    icon: 'p-2',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-none font-medium tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
