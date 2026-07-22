import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary:
        'bg-gold text-charcoal hover:bg-goldHover shadow-button font-medium',
      secondary:
        'bg-transparent border border-gold text-charcoal hover:bg-gold hover:text-charcoal',
      ghost: 'bg-transparent text-charcoal hover:text-gold',
      dark: 'bg-charcoal text-cream hover:bg-charcoal/90',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-sm',
      full: 'w-full px-6 py-4 text-sm',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center uppercase tracking-widest transition-all duration-300 ease-out rounded-sm',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;