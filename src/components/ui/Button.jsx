import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-sans text-sm uppercase tracking-widest py-4 px-8 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        variant === 'primary' && 'bg-gold text-charcoal hover:bg-gold-hover',
        variant === 'secondary' && 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream',
        variant === 'outline' && 'border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5',
        variant === 'ghost' && 'text-charcoal hover:text-gold',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;