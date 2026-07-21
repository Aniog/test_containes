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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-champagne text-espresso hover:bg-espresso hover:text-ivory disabled:bg-champagne/50 disabled:cursor-not-allowed',
    secondary: 'border border-espresso text-espresso hover:bg-espresso hover:text-ivory',
    ghost: 'text-cocoa hover:text-espresso underline-offset-4 hover:underline',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-8 py-4',
    lg: 'px-10 py-5 text-lg',
    icon: 'p-3',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        loading && 'opacity-70 cursor-wait',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
