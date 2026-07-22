import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      as: Component = 'button',
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        'bg-brand-gold text-brand-bg-primary hover:bg-brand-gold-hover hover:shadow-gold',
      secondary:
        'bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-bg-primary',
      ghost:
        'bg-transparent text-brand-text-primary hover:text-brand-gold',
    };

    const sizes = {
      sm: 'h-8 px-4 text-xs',
      md: 'h-11 px-6 text-sm',
      lg: 'h-14 px-8 text-sm',
    };

    return (
      <Component
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-sans font-medium',
          'uppercase tracking-[0.15em] transition-all duration-300',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
