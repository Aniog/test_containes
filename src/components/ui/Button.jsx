import { forwardRef } from 'react';
import { clsx } from 'clsx';

const variants = {
  primary: 'bg-gold-400 text-warm-900 hover:bg-gold-500 active:bg-gold-600',
  secondary: 'bg-transparent border border-gold-400 text-warm-800 hover:bg-gold-50 active:bg-gold-100',
  ghost: 'bg-transparent text-warm-700 hover:text-warm-900 underline-offset-4 hover:underline',
  dark: 'bg-warm-900 text-white hover:bg-warm-800 active:bg-warm-700',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-4 text-sm',
  full: 'px-6 py-4 text-xs w-full',
};

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className,
    disabled,
    loading,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center font-sans font-medium uppercase tracking-extra-wide',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
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
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;
