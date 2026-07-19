import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-black disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-velmora-gold text-velmora-black hover:bg-velmora-gold-hover uppercase tracking-wider text-sm',
    secondary: 'border border-velmora-gold text-velmora-gold hover:bg-velmora-gold/10 uppercase tracking-wider text-sm',
    ghost: 'text-velmora-white hover:text-velmora-gold',
    outline: 'border border-velmora-border text-velmora-white hover:border-velmora-gold hover:text-velmora-gold'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
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

export default Button;