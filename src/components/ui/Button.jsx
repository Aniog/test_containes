import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold-light shadow-sm hover:shadow-md',
    secondary: 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal',
    ghost: 'bg-transparent text-charcoal hover:bg-stone-100',
    outline: 'bg-transparent border border-stone-300 text-charcoal hover:border-gold hover:text-gold'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'w-full px-6 py-4 text-sm'
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