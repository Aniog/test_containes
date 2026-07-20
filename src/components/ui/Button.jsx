import React from 'react';
import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className, 
  disabled,
  loading,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-dark border border-gold',
    secondary: 'bg-transparent text-charcoal hover:bg-charcoal hover:text-white border border-charcoal',
    outline: 'bg-transparent text-gold hover:bg-gold hover:text-white border border-gold',
    ghost: 'bg-transparent text-charcoal hover:bg-parchment'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'px-6 py-3 text-sm w-full'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Adding...</span>
        </span>
      ) : children}
    </button>
  );
};

export default Button;
