import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'default',
  isLoading = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const variants = {
    primary: `
      bg-accent text-white
      hover:bg-accent-hover hover:shadow-md hover:-translate-y-0.5
      active:translate-y-0 active:shadow-sm
    `,
    secondary: `
      bg-transparent text-accent border border-accent
      hover:bg-accent hover:text-white
      active:bg-accent-hover
    `,
    ghost: `
      bg-transparent text-text-primary
      hover:bg-secondary
      active:bg-border
    `,
    outline: `
      bg-transparent text-text-primary border border-border
      hover:border-accent hover:text-accent
      active:bg-secondary
    `,
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'px-6 py-3 text-sm w-full',
  };
  
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
