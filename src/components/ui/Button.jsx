import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center font-sans font-medium
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const variants = {
    primary: `
      bg-accent text-white
      hover:bg-accent-hover hover:shadow-soft
      active:scale-[0.98]
    `,
    secondary: `
      bg-transparent text-primary border border-primary
      hover:bg-primary hover:text-white
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-primary
      hover:bg-surface
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent border border-accent text-accent
      hover:bg-accent hover:text-white
      active:scale-[0.98]
    `,
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm rounded',
    md: 'h-11 px-6 text-sm rounded-md',
    lg: 'h-13 px-8 text-base rounded-md',
    full: 'h-12 px-6 text-sm rounded-md w-full',
  };
  
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
