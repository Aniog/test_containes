import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-velmora-charcoal text-velmora-cream hover:bg-velmora-gold focus:ring-velmora-gold',
    secondary: 'bg-transparent border border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-velmora-cream focus:ring-velmora-charcoal',
    accent: 'bg-velmora-gold text-velmora-charcoal hover:bg-velmora-goldDark focus:ring-velmora-gold',
    ghost: 'bg-transparent text-velmora-charcoal hover:bg-velmora-sand/50 focus:ring-velmora-taupe',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'w-full px-6 py-4 text-sm',
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

export default Button;