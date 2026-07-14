import { forwardRef } from 'react';
import { clsx } from 'clsx';

const variants = {
  primary: 'bg-champagne text-rich-black hover:bg-opacity-90 shadow-sm hover:shadow-card-hover',
  secondary: 'border border-champagne text-champagne hover:bg-champagne hover:text-rich-black',
  ghost: 'text-champagne hover:bg-champagne hover:bg-opacity-10',
  dark: 'bg-rich-black text-warm-ivory hover:bg-warm-gray-900',
};

const sizes = {
  sm: 'px-6 py-2 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-sm',
};

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading,
  icon,
  iconPosition = 'left',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-medium tracking-wider uppercase transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
