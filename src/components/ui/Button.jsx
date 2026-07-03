import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-velmora-gold text-white hover:bg-opacity-90 hover:shadow-gold active:scale-[0.98]',
    secondary: 'border-2 border-velmora-gold text-velmora-espresso hover:bg-velmora-gold hover:text-white',
    ghost: 'text-velmora-espresso hover:bg-velmora-sand',
    dark: 'bg-velmora-charcoal text-white hover:bg-opacity-90 hover:shadow-lift',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm tracking-wide',
    lg: 'h-14 px-8 text-base tracking-wide',
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
